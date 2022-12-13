import { createSlice } from "@reduxjs/toolkit";

interface ICatalogInterface {
  open: boolean;
}

const initialState: ICatalogInterface = {
  open: false,
};

export const catalogFunction = createSlice({
  name: "catalog-functions",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setOpen } = catalogFunction.actions;

export default catalogFunction.reducer;
