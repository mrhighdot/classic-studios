import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  isToggle: false,
};

const toggleSlice = createSlice({
  name: "toggleDropdown",
  initialState,
  reducers: {
    toggleFAQ: (state, action) => {
      const newID = action.payload === state.id;
      state.id = newID;
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggleFAQ } = toggleSlice.actions;

export default toggleSlice.reducer;
