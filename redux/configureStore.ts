import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import rootReducer from './reducers';

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(listenerMiddleware.middleware),
})