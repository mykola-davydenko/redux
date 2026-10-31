import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/es/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users'],
}

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({

    reducer: {
        users: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

// store.subscribe(() => {
//     const users = store.getState().users.users;
//     localStorage.setItem("cards", JSON.stringify(users))
// })