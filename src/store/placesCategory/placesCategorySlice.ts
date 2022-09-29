import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlacesCategoryState {
  value: string;
}

const initialState: PlacesCategoryState = {
  value: 'interesting_places'
};

export const placesCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const placesCategoryActions = placesCategorySlice.actions;
export const placesCategoryReducer = placesCategorySlice.reducer;
