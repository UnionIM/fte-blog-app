import React, { FC } from "react";
import { StyledInput } from "./index";
import { TColor } from "../../../styles/colors";

export interface IInput {
  placeholder?: string;
  disabled?: boolean;
  borderColor?: TColor;
}

const Input: FC<IInput> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
