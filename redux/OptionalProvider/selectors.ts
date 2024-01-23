
import { createSelector } from '@reduxjs/toolkit';

import rootReducer, { RootState } from '../reducers';
import { initialState } from './slice';

export const selectOptionalStore = rootReducer.selector((state: RootState) => state.optional);
export const selectOptionalStore2 = (state: RootState) => state.optional || initialState;

export const selectOptionalCount = createSelector(selectOptionalStore, optionalCounter => optionalCounter?.optionalCount);
