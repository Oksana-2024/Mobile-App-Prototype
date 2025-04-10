import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from "./menuSlice";

const store = configureStore({
  reducer: {
    mobileMenu: toggleMenuReducer,
  },
});

export { store };
