import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
	yield takeLatest('API_CALL_REQUEST', workerSaga);
}

// Makes the API request and returns a Promise for response
function fetchDog() {
	return axios({
		method: 'get',
		url: 'https://dog.ceo/api/breeds/image/random'
	});
}

// Makes the API call whe watcher saga sees the action
function* workerSaga() {
	try {
		const response = yield call(fetchDog);
		const dog = response.data.message;

		// Dispatch a success action to the store with the new dog
		yield put({ type: 'API_CALL_SUCCESS', dog });
	} 
	catch (error) {
		// Dispatch a failure action to the store with the error
		yield put({ type: 'API_CALL_FAILURE', error });
	}
}
