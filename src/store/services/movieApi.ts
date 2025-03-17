import { API_URL, ENDPOINTS } from "@/shared/constants/app";
import { getToken } from "@/utils/auth.util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    updateUser: build.mutation({
      query: (userData) => ({
        url: `${ENDPOINTS.USER.UPDATE}/${userData.id}`,
        method: "PATCH",
        body: userData,
      }),
    }),
  }),
});

export const { useUpdateUserMutation } = movieApi;
