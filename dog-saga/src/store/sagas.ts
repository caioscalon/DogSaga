import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ActionNames } from './actions';

// Watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
	yield takeLatest(ActionNames.REQUEST_DOG_IMAGE, workerSaga);
}

// Makes the API request and returns a Promise for response
const fetchDog = () => {
	return axios({
		method: 'get',
		url: 'https://dog.ceo/api/breeds/image/random'
	});
}

// Makes the API call whe watcher saga sees the action
export function* workerSaga() {
	try {
		const response = yield call(fetchDog);
		const dogImage = response.data.message;

		yield put({ type: ActionNames.SUCCESS_DOG_IMAGE, payload: dogImage });
	}
	catch (error) {
		yield put({ type: ActionNames.FAILURE_DOG_IMAGE, payload: error });
	}
}