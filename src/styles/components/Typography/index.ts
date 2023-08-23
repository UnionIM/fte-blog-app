import styled from "@emotion/styled";
import { baseStyles } from "../../index";
import { ITextStyles } from "./Typography";
import { IBaseStyles } from "../../../models/IBaseStyles";

export const StyledP = styled.p<
  Partial<{
    styles: Partial<ITextStyles>;
    sx: Partial<IBaseStyles>;
  }>
>`
  font-family: ${({ styles }) => styles?.fontFamily || "Inter"};
  font-weight: ${({ styles }) => styles?.fontWeight || "500"};
  font-size: ${({ styles }) => styles?.fontSize || "16px"};
  line-height: ${({ styles }) => styles?.lineHeight || "normal"};
  color: ${({ styles }) => styles?.color || "black"};
  ${({ sx }) => baseStyles(sx)}
`;
