import type { WithSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import rootReducer from '../reducers';
import { setupListener } from './listeners';

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

setupListener();

export default slice;

