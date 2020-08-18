import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../store/reducers/auth';

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, reducer)  
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(persistedReducer, composeEnhances(
  applyMiddleware(thunk)
));

//  production
// export const store=createStore(persistedReducer,applyMiddleware(thunk));


export const persistor = persistStore(store);

export default {store ,persistor};


