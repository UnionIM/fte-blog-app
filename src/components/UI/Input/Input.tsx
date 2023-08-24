import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { StyledInput, StyledTextArea } from "./index";
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
  multiline?: boolean;
  rows?: number;
}

type PartialIInput = TRequiredFields<IInput, "setState">;

const Input: FC<PartialIInput> = ({
  setState,
  placeholder = " ",
  multiline = false,
  ...restProps
}) => {
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);
  };

  return multiline ? (
    <StyledTextArea
      placeholder={placeholder}
      {...restProps}
      onChange={textAreaHandler}
    />
  ) : (
    <StyledInput
      placeholder={placeholder}
      {...restProps}
      onChange={inputHandler}
    />
  );
};

export default Input;
