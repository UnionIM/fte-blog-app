import React, { FC } from "react";
import { StyledAlert } from "./index";
import { IBaseStyles } from "../../../models/IBaseStyles";

interface IAlert {
  message: string;
  bgColor?: "red" | "yellow" | "green";
  sx?: Partial<IBaseStyles>;
}

const Alert: FC<IAlert> = ({ message, bgColor, sx }) => {
  return (
    <StyledAlert bgColor={bgColor || "red"} sx={sx}>
      {message}
    </StyledAlert>
  );
};

export default Alert;
