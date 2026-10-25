import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({

    reducer: {
        users: userReducer
    }
})

store.subscribe(() => {
    const users = store.getState().users.users;
    localStorage.setItem("cards", JSON.stringify(users))
})