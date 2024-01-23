import { combineSlices } from '@reduxjs/toolkit';

import counterSlice from './CounterProvider/slice';


export interface LazyLoadedSlices {}

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineSlices({
  [counterSlice.name]: counterSlice.reducer,
}).withLazyLoadedSlices<LazyLoadedSlices>();;

export default rootReducer;

