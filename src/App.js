import React, { Component } from 'react';
import './App.css';
import StudentList from './containers/StudentList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentList />
      </div>
    );
  }
}

export default App;
