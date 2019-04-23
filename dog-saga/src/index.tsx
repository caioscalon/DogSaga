import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import DogSaga from './store/DogSaga';
import { store } from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<DogSaga />
	</Provider>, 
	document.getElementById('root')
);
