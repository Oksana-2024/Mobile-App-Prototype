import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenu: false,
};

export const selectMobileMenu = (state) => state.mobileMenu.mobileMenu;

const toggleMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducer: {
    toggleMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});

export const { toggleMenu } = toggleMenuSlice.actions;

export default toggleMenuSlice.reducer;
