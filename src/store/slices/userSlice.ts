import { User } from "@/shared/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userDetail: {
    id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    image: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail: (state, action: PayloadAction<User>) => {
      state.userDetail = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;
export const { setUserDetail } = userSlice.actions;

export default userReducer;
