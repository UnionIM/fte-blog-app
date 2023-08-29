import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostData } from "../models/IPost";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/post`,
  }),
  endpoints: (build) => ({
    fetchPosts: build.query<IPostData[], number>({
      query: (_limit: number = 5) => ({
        url: `/all`,
        params: {
          _limit,
        },
      }),
    }),
  }),
});
