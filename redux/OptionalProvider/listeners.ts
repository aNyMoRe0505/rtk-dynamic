import type { Dispatch, ListenerEffect, ListenerMiddlewareInstance } from '@reduxjs/toolkit';
import type { RootState } from '../reducers';
import { startAppListening } from '../configureStore';

import { optionalIncrement, optionalDecrement } from './slice';

export const onOptionalIncrementEffect: ListenerEffect<ReturnType<typeof optionalIncrement>, RootState, Dispatch> = () => {
  console.log('onOptionalIncrementEffect');
};

export const onOptionalDecrementEffect: ListenerEffect<ReturnType<typeof optionalDecrement>, RootState, Dispatch> = () => {
  console.log('onOptionalDecrementEffect');
};

export function setupListeners() {
  startAppListening({
    actionCreator: optionalIncrement,
    effect: onOptionalIncrementEffect,
  });
  startAppListening({
    actionCreator: optionalDecrement,
    effect: onOptionalDecrementEffect,
  });
}