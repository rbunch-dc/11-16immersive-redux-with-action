// The master reducer doesn't manage any state on it's own. It manages
// all teh reducers. The reducers manage state, the master reducer managaes
// the reducers. Export all reducers as an object using "combineReducers"
// And each property we export, will be available as state.PROPERTY.

// First we need combineReducers from Redux
import { combineReducers } from 'redux';
// Bring in the reducer (module) that manages students
import StudentReducer from './StudentReducer';
import StudentPickerReducer from './StudentPickerReducer';

const rootReducer = combineReducers({
	// Each key/property in this object, will be available on the redux state
	students: StudentReducer,
	studentPicker: StudentPickerReducer
})

export default rootReducer;

