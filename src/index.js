import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Remember, react and redux do NOT know about each other. They are separate libraries.
// We NEED react-redux to get them to talk. Import Proivder component (see below)
import {Provider} from 'react-redux'

// Get createSTore method from redux. We will use it to create a store and pass to that
// store all our reducers. That created store will go to the provider
import { createStore } from 'redux';

import reducers from './reducers/index';

const theStore = createStore(reducers);

// Wrapping the Provider component (from react-redux) around your components,
// will allow the store (brain of redux) to get them to talk
ReactDOM.render(
	<Provider store={theStore}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
