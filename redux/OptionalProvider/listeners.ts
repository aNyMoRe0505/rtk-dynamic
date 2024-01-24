import type { Dispatch, ListenerEffect } from '@reduxjs/toolkit';

import { RootState } from '../reducers';
import { optionalIncrement, optionalDecrement } from './slice';
import { startAppListening } from '../configureStore';

export const onOptionalIncrementEffect: ListenerEffect<ReturnType<typeof optionalIncrement>, RootState, Dispatch> = () => {
  console.log('onOptionalIncrementEffect');
};

export const onOptionalDecrementEffect: ListenerEffect<ReturnType<typeof optionalDecrement>, RootState, Dispatch> = () => {
  console.log('onOptionalDecrementEffect');
};

export const setupListener = () => {
  startAppListening({
    actionCreator: optionalIncrement,
    effect: onOptionalIncrementEffect,
  });
  startAppListening({
    actionCreator: optionalDecrement,
    effect: onOptionalDecrementEffect,
  });
};

