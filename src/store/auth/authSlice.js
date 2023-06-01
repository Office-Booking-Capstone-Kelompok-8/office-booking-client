import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: localStorage.getItem('email'),
  name: localStorage.getItem('name'),
  phone: localStorage.getItem('phone'),
  picture: localStorage.getItem('picture'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPhoto: (state, action) => {
      state.picture = action.payload.picture;
    },
    setCredential: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.picture = action.payload.picture;
    },
    logout: (state) => {
      state.email = null;
      state.name = null;
      state.phone = null;
      state.picture = null;
    },
  },
});

export const { logout, setCredential, setPhoto } = authSlice.actions;
export default authSlice.reducer;
