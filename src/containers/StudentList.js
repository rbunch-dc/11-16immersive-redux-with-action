import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent';

// console.log(SelectStudent)

// Bind action creators is a functino in redux that will trigger
// the action through every single reducer
import { bindActionCreators } from 'redux'

class StudentList extends Component{
	// We have access this.props.students, becaseu we brought it in 
	// below in mapStateToProps
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li key={index} onClick={() => this.props.selectStudent(student)}>
					{student.name}
				</li>
			)
		});

		// console.log(this.props.students);
		return(
			<div>
				{studentArray}
				<h2>You have picked{this.props.selectedStudent}!</h2>
			</div>
		);
	}
}

// This function will tie together whatever is returned from the reducer we
// call, to this.props. This is the GLUE between redux state, and THIS Component
// knowing about.
// ANother way... we are going to pick our reducers, and they will be available
// to the compoenent as this.props.NAMEBELOW
function mapStateToProps(state){
	return{
		students: state.students,
		selectedStudent: state.studentPicker
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectStudent: SelectStudent
	}, dispatch)
}

// console.log(connect(mapStateToProps,mapDispatchToProps));

var aComponentThatHasReduxStateAndActions = connect(mapStateToProps,mapDispatchToProps)(StudentList);
export default aComponentThatHasReduxStateAndActions;