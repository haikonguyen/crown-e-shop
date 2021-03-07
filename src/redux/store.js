import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
