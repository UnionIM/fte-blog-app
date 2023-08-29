import React, { FC, ReactNode } from "react";
import { StyledButton } from "./index";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { TColor } from "../../../styles/colors";
import { TRequiredFields } from "../../../models/TRequiredFields";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonVariant = "text" | "contained" | "outlined";

export interface IButton {
  variant: ButtonVariant;
  size: ButtonSize;
  color: TColor;
  sx: Partial<IBaseStyles>;
  onClick: React.MouseEventHandler;
  children: ReactNode;
}

type OptionalIButton = TRequiredFields<IButton, "children">;

const Button: FC<OptionalIButton> = ({
  color = "blue",
  variant = "text",
  size = "medium",
  children,
  onClick,
  sx,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}
      {...sx}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
