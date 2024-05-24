// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
// Configure the Redux store
const store = configureStore({
    reducer: {
        contact: contactReducer,
    },
});
// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
