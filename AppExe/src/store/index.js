import {configureStore} from '@reduxjs/toolkit';
import modalReducer from '../reducers/modal/modalSlice';
import counterReducer from '../reducers/counter/counterSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    counter: counterReducer,
  },
});

export default store;
