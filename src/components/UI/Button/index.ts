import { ButtonSize, ButtonVariant } from "./Button";
import styled from "@emotion/styled";
import { baseStyles, Colors, DarkColors, TColor } from "../../../styles";
import { IBaseStyles } from "../../../models/IBaseStyles";

export const StyledButton = styled.button<{
  size: ButtonSize;
  color: TColor;
  variant: ButtonVariant;
  sx?: Partial<IBaseStyles>;
}>`
  border-color: ${({ variant, color }) =>
    variant !== "text" && Colors[color || "blue"]};
  border: ${({ variant }) => (variant === "text" ? "unset" : "1px solid")};
  color: ${({ variant, color }) =>
    variant !== "contained" ? Colors[color || "blue"] : "white"};
  background-color: ${({ variant, color }) =>
    variant === "contained" ? Colors[color || "blue"] : "transparent"};
  border-radius: 8px;
  padding: ${({ size }) => paddingSize(size)};
  font-size: ${({ size }) => fontSize(size)};
  ${({ sx }) => baseStyles(sx)};
  text-align: ${({ sx }) => sx?.textAlign || "center"};
  cursor: pointer;
  &:hover {
    border-color: ${({ variant, color }) =>
      variant !== "text" && DarkColors[color || "blue"]};
    border: ${({ variant }) => (variant === "text" ? "unset" : "1px solid")};
    color: ${({ variant, color }) =>
      variant !== "contained" ? DarkColors[color || "blue"] : "white"};
    background-color: ${({ variant, color }) =>
      variant === "contained" ? DarkColors[color || "blue"] : "transparent"};
  }
`;

const paddingSize = (size: ButtonSize) => {
  switch (size) {
    case "large":
      return "11px 25px";
    case "medium":
      return "10px 25px";
    case "small":
      return "8px 25px";
    default:
      return "10px 25px";
  }
};

const fontSize = (size: ButtonSize | undefined) => {
  switch (size) {
    case "large":
      return "16px";
    case "medium":
      return "14px";
    case "small":
      return "12px";
    default:
      return "10px 25px";
  }
};
