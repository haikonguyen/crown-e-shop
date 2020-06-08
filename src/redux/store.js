import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [logger, thunk];

// const store = createStore(
//   rootReducer,
//   composeWithDevTools()
// );

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
