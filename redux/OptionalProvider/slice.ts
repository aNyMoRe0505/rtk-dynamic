import type { Dispatch, ListenerEffect, WithSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import rootReducer, { RootState } from '../reducers';
import { startAppListening } from '../configureStore';

export const initialState = {
  optionalCount: 0,
};

const slice = createSlice({
  name: 'optional',
  initialState,
  reducers: {
    optionalIncrement: state => { state.optionalCount += 1 },
    optionalDecrement: state => { state.optionalCount -= 1 }
  },
});

export const withOptionalSlice = rootReducer.inject(slice);

declare module '../reducers' {
  export interface LazyLoadedSlices extends WithSlice<typeof slice> {}
}

export const { optionalIncrement, optionalDecrement } = slice.actions;

const onOptionalIncrementEffect: ListenerEffect<ReturnType<typeof optionalIncrement>, RootState, Dispatch> = () => {
  console.log('onOptionalIncrementEffect');
};

const onOptionalDecrementEffect: ListenerEffect<ReturnType<typeof optionalDecrement>, RootState, Dispatch> = () => {
  console.log('onOptionalDecrementEffect');
};

startAppListening({
  actionCreator: optionalIncrement,
  effect: onOptionalIncrementEffect,
});
startAppListening({
  actionCreator: optionalDecrement,
  effect: onOptionalDecrementEffect,
});

export default slice;

