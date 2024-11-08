import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  id: "",
  name: "",
  email: "",
  address: "",
  phone: "",
  status: "",
};

const initialAuthenticationState = {
  role: "",
  permissions: [],
  access_token: "",
};

const initialState = {
  profile: initialProfileState,
  authentication: initialAuthenticationState,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.profile ={ ...state.profile, ...action.payload};
    },
    setUserAuthentication: (state, action) => {
      state.authentication = { ...state.profile, ...action.payload};
    },
    logout: (state) => {
      state.profile = initialProfileState;
      state.authentication = initialAuthenticationState;
    },
  },
});

export const { setUserProfile, setUserAuthentication, logout } = userSlice.actions;

export default userSlice.reducer;
