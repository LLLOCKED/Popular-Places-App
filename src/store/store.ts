import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./location/locationSlice";
import { tripmapApi } from "./tripmap/tripmap.api";

export const store = configureStore({
  reducer: {
    [tripmapApi.reducerPath]: tripmapApi.reducer,
     location: locationReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tripmapApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch
