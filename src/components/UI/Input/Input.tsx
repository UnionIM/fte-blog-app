import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { StyledInput } from "./index";
import { TColor } from "../../../styles";
import { TRequiredFields } from "../../../models/TRequiredFields";
import { IBaseStyles } from "../../../models/IBaseStyles";

export interface IInput {
  placeholder: string;
  disabled: boolean;
  borderColor: TColor | "gray";
  type: "password";
  required: boolean;
  sx: Partial<IBaseStyles>;
  setState: Dispatch<SetStateAction<string>>;
  value?: string;
}

type PartialIInput = TRequiredFields<IInput, "setState">;

const Input: FC<PartialIInput> = ({ setState, ...restProps }) => {
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return <StyledInput {...restProps} onChange={inputHandler} />;
};

export default Input;
