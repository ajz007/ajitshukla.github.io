import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootReducer from '../features/redux/reducers/rootReducer';
import skillReducer from '../features/redux/reducers/skillReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    skills: skillReducer
  },
});
