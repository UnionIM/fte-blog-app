import styled from "@emotion/styled";
import { TAlignItems, TJustifyContent } from "../../StylesTypes";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { baseStyles } from "../../index";

export const StyledGrid = styled.div<
  Partial<{
    justifyContent: TJustifyContent;
    alignItems: TAlignItems;
    gridTemplateColumns: string;
    gap: number;
    sx?: Partial<IBaseStyles>;
  }>
>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  gap: ${({ gap }) => (gap || "0") + "px"};
  justify-content: ${({ justifyContent }) => justifyContent || "stretch"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  ${({ sx }) => baseStyles(sx)}
`;
