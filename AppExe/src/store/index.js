import {configureStore} from '@reduxjs/toolkit';
import modalReducer from '../reducers/modal/modalSlice';
import counterReducer from '../reducers/counter/counterSlice';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

let persistConfig = {key: 'root', storage};

let rootReducer = combineReducers({
  modal: modalReducer,
  counter: counterReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export default store;
