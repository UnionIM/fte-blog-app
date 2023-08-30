import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPostData } from "../models/IPost";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/post`,
  }),
  tagTypes: ["Post", "PostListUpdate"],
  endpoints: (build) => ({
    fetchPosts: build.query<IPostData[], number>({
      query: () => ({
        url: `/all`,
      }),
      providesTags: () => ["Posts"],

    }),
    getPost: build.query<IPostData, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: () => ["Post"],
    }),
    createPost: build.mutation<
      IPostData,
      {
        authorId: string;
        title: string;
        description: string;
        image: string | null;
      }
    >({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: build.mutation<
      IPostData,
      Partial<{
        postId: string;
        authorId: string;
        image: string | null;
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
    deletePost: build.mutation<null, { postId: string }>({
      query: ({ postId }) => ({
        url: `/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});
