import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostData } from "../models/IPost";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/post`,
  }),
  tagTypes: ["Post", "PostDel"],
  endpoints: (build) => ({
    fetchPosts: build.query<IPostData[], number>({
      query: () => ({
        url: `/all`,
      }),
      providesTags: () => ["PostDel"],
    }),
    getPost: build.query<IPostData, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: () => ["Post"],
    }),
    updatePost: build.mutation<
      IPostData,
      Partial<{
        postId: string;
        authorId: string;
        title: string;
        description: string;
      }>
    >({
      query: ({ postId, ...body }) => ({
        url: `/${postId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: build.mutation<IPostData, { postId: string }>({
      query: ({ postId }) => ({
        url: `/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PostDel"],
    }),
  }),
});
