import { configureStore } from '@reduxjs/toolkit';
import { locationReducer } from './location/locationSlice';
import { placesCategoryReducer } from './placesCategory/placesCategorySlice';
import { tripmapApi } from './tripmap/tripmap.api';

export const store = configureStore({
  reducer: {
    [tripmapApi.reducerPath]: tripmapApi.reducer,
    category: placesCategoryReducer,
    location: locationReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(tripmapApi.middleware);
  }
});

export type RootState = ReturnType<typeof store.getState>;
