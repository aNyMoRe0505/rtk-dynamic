
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../reducers';
import { withOptionalSlice } from './slice';

export const selectOptionalStore = withOptionalSlice.selector((state: RootState) => state.optional);

export const selectOptionalCount = createSelector(selectOptionalStore, optionalCounter => optionalCounter?.optionalCount);
