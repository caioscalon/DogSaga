import createSagaMiddleware from 'redux-saga';
import { compose, createStore, applyMiddleware } from 'redux';
import { dogInfoReducer } from './reducer';
import { watcherSaga } from './sagas';

// Dev tools middleware (debug)
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

// Create a redux store with our reducer above and middleware
export const store = createStore(dogInfoReducer, composeEnhancers(middleware));

// Run the saga
sagaMiddleware.run(watcherSaga);
