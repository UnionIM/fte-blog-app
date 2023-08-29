import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export const errorHandler = (
  error: FetchBaseQueryError | SerializedError | undefined,
): { status: number; message: string } | undefined => {
  if (error) {
    if ("data" in error) {
      return JSON.parse(JSON.stringify(error.data));
    }
  }
};
