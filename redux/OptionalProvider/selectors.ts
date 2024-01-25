
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../reducers';

export const selectOptionalStore = (state: RootState) => state.optional;

export const selectOptionalCount = createSelector(selectOptionalStore, optionalCounter => optionalCounter?.optionalCount);
