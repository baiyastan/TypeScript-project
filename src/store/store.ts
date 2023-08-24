import { configureStore } from "@reduxjs/toolkit";
import authSlece from "../redux/authSlece";
import postSlice from "../redux/post";
import MoviesSlice from "../redux/MoviesSlice";

export const store = configureStore({
  reducer: {
    user: authSlece,
    posts: postSlice,
    movies: MoviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
