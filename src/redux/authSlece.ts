import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string;
  email: string | null;
  accessToken: string;
}

const setLocalStroage = (): User | null => {
  try {
    const serializedUser = localStorage.getItem("user");
    if (serializedUser) {
      return JSON.parse(serializedUser);
    }
    return null;
  } catch (error) {
    return null;
  }
};

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: setLocalStroage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const selectUser = (state: { auth: AuthState }): User | null => state.auth.user;

export default authSlice.reducer;
