import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { jsonApi } from '../services/api';

export const store = configureStore({
    reducer: {
        [jsonApi.reducerPath]: jsonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonApi.middleware),
});

setupListeners(store.dispatch);