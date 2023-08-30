import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userSlice } from "../store/reducers/UserSlicer";

export const FetchBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL}/auth`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const getCookieValue = (cookieKey: string) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieKey}=`))
    ?.split("=")[1];
};

type ApiStatus = 200 | 401;

type ApiError = { status: ApiStatus; data?: { message: string } };

export const adminFetchBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await FetchBaseQuery(args, api, extraOptions);
  const error = result.error as ApiError;
  const apiStatus = result?.meta?.response?.status;
  if (error && apiStatus) {
    switch (apiStatus) {
      case 401:
        const refrRes = await FetchBaseQuery(
          {
            url: "/refresh",
            method: "POST",
            body: { refresh: getCookieValue("refreshToken") },
          },
          api,
          extraOptions,
        );
        if (refrRes.data) {
          api.dispatch(userSlice.actions.setUser(refrRes.data));
          result = await FetchBaseQuery(args, api, extraOptions);
        }
        break;
    }
  }
  return result;
};
