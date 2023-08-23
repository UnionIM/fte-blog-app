import styled from "@emotion/styled";
import { Colors, TColor, baseStyles } from "../../../styles";
import { IBaseStyles } from "../../../models/IBaseStyles";

export const StyledInput = styled.input<{
  borderColor?: TColor | "gray";
  sx?: Partial<IBaseStyles>;
}>`
  font-size: 14px;
  border-radius: 8px;
  padding: 9px;
  outline: none;
  &:focus {
    border: ${({ borderColor }) => Colors[borderColor || "blue"]} 1px solid !important;
  }
  &:not(placeholder-shown) {
    border: ${({ borderColor }) => Colors[borderColor || "blue"]} 1px solid;
  }
  &:placeholder-shown {
    border: ${Colors.gray} 1px solid;
  }
  ${({ sx }) => baseStyles(sx)};
`;
