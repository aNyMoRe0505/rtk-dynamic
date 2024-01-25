import type { TypedStartListening, TypedAddListener } from "@reduxjs/toolkit"
import { configureStore, createListenerMiddleware, addListener } from '@reduxjs/toolkit';
import { setupListeners as setupOptionalListeners } from '@/redux/OptionalProvider/listeners';

import rootReducer, { RootState } from './reducers';

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]

export const startAppListening = listenerMiddleware.startListening as TypedStartListening<RootState, AppDispatch>
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>

setupOptionalListeners(startAppListening);
