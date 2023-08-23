import React, { FC, ReactNode } from "react";
import { StyledButton } from "./index";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { TColor } from "../../../styles";
import { TRequiredFields } from "../../../models/TRequiredFields";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonVariant = "text" | "contained" | "outlined";

export interface IButton {
  variant: ButtonVariant;
  size: ButtonSize;
  color: TColor;
  sx: Partial<IBaseStyles>;
  type: "button" | "submit" | "reset";
  onClick: React.MouseEventHandler;
  children: ReactNode;
}

type OptionalIButton = TRequiredFields<IButton, "children">;

const Button: FC<OptionalIButton> = ({
  color = "blue",
  variant = "text",
  size = "medium",
  children,
  type,
  onClick,
  sx,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}
      type={type}
      sx={sx}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
