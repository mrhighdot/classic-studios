import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./slices/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle:toggleReducer,
  },
});
