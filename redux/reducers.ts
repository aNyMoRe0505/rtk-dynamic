import { combineSlices } from '@reduxjs/toolkit';

import counterSlice from './CounterProvider/slice';
import optionalSlice from './OptionalProvider/slice';


export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineSlices({
  [counterSlice.name]: counterSlice.reducer,
  [optionalSlice.name]: optionalSlice.reducer,
});

export default rootReducer;

