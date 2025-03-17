import { API_URL, ENDPOINTS } from "@/shared/constants/app";
import { getToken } from "@/utils/auth.util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
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
    uploadAvatar: build.mutation({
      query: (formData) => ({
        url: ENDPOINTS.IMAGE.USER,
        method: "POST",
        body: formData,
      }),
    }),
    uploadImgMovie: build.mutation({
      query: (formData) => ({
        url: ENDPOINTS.IMAGE.MOVIE,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadAvatarMutation } = imageApi;
