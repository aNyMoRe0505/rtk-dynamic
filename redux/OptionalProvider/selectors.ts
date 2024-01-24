
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../reducers';
import { initialState, withOptionalSlice } from './slice';

export const selectOptionalStore = withOptionalSlice.selector((state: RootState) => state.optional || initialState);

export const selectOptionalCount = createSelector(selectOptionalStore, optionalCounter => optionalCounter?.optionalCount);
