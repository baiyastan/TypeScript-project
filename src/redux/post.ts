import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.loading = false;
      state.posts = action.payload;
    },
    getPostsError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getPostsStart, getPostsSuccess, getPostsError } = postSlice.actions;

export default postSlice.reducer;
