import { API_URL, ENDPOINTS } from "@/shared/constants/app";
import { getToken } from "@/utils/auth.util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: ENDPOINTS.AUTH.LOGIN,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: build.mutation({
      query: (user) => ({
        url: ENDPOINTS.AUTH.REGISTER,
        method: "POST",
        body: { ...user },
      }),
    }),
    me: build.query({
      query: () => ({
        url: ENDPOINTS.AUTH.ME,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
  useLazyMeQuery,
} = authApi;
