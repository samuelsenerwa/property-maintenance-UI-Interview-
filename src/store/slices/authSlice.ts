import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";


interface AuthState {
    isAuthenticated: boolean;
    user: {
        id?: string;
        email?: string;
        name?: string;
    } | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

// initial state
const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
}

// create a slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
      loginSuccess: (state, action: PayloadAction<{ user: AuthState['user']; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
    state.loading = false;
    state.error = action.payload;
    },
    logout: (state) => {
    state.isAuthenticated = false;
    state.user = null;
    state.token = null;
    state.loading = false;
    state.error = null;
    },
    updateUser: (state, action: PayloadAction<Partial<AuthState['user']>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    },
});

//  Export actions
export const { loginStart, loginSuccess, loginFailure, logout, updateUser } = authSlice.actions;

// Export selectors
export const selectAuth = (state: RootState) => state.auth;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;

// Export the reducer
export default authSlice.reducer;
