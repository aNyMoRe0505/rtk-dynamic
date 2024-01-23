import { createSlice, WithSlice } from '@reduxjs/toolkit';

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

declare module '../reducers' {
  export interface LazyLoadedSlices extends WithSlice<typeof slice> {}
}

export const { optionalIncrement, optionalDecrement } = slice.actions;

export default slice;

