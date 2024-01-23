
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../reducers';

export const selectCounterStore = (state: RootState) => state.counter;

export const selectCount = createSelector(selectCounterStore, counter => counter.count);
