import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.email = null;
      state.role = null;
    },
  },
});

export const { logout, setCredential } = authSlice.actions;
export default authSlice.reducer;
