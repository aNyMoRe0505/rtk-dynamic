import type { Dispatch, ListenerEffect, ListenerMiddlewareInstance } from '@reduxjs/toolkit';
import type { RootState } from '../reducers';

import { optionalIncrement, optionalDecrement } from './slice';

export const onOptionalIncrementEffect: ListenerEffect<ReturnType<typeof optionalIncrement>, RootState, Dispatch> = () => {
  console.log('onOptionalIncrementEffect');
};

export const onOptionalDecrementEffect: ListenerEffect<ReturnType<typeof optionalIncrement>, RootState, Dispatch> = () => {
  console.log('onOptionalDecrementEffect');
};

export function setupListeners(startListening: ListenerMiddlewareInstance['startListening']) {
  startListening({
    actionCreator: optionalIncrement,
    effect: onOptionalIncrementEffect,
  });
  startListening({
    actionCreator: optionalDecrement,
    effect: onOptionalDecrementEffect,
  });
}