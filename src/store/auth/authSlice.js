import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logout, setCredential } = authSlice.actions;
export default authSlice.reducer;
