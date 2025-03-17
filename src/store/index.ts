import {
  configureStore,
  isFulfilled,
  isRejected,
  Middleware,
} from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { toast } from "react-toastify";
import { ApiResponse } from "@/shared/types/app";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./slices/userSlice";
import { userApi } from "./services/userApi";
import { imageApi } from "./services/imageApi";
import { clearToken } from "@/utils/auth.util";

export const rtkQueryLogger: Middleware = () => (next) => (action) => {
  if (isRejected(action)) {
    const errorData = (action.payload as { data?: ApiResponse })?.data;

    if (errorData?.statusCode === 401) {
      clearToken();
      window.location.href = "/login";
      return;
    }

    if (errorData) {
      toast.error(errorData.message || "Có lỗi xảy ra!");
    }
  }

  if (isFulfilled(action)) {
    const successData = action.payload as ApiResponse;

    if (successData?.message) {
      toast.success(successData.message);
    }
  }

  return next(action);
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(rtkQueryLogger)
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(imageApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
