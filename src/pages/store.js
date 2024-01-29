import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/reducer/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
