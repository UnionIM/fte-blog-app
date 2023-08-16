import styled from "@emotion/styled";
import { baseStyles } from "../../baseStyles";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { TAlignItems, TJustifyContent } from "../../StylesTypes";

export const StyledFlex = styled.div<
  Partial<{
    flexDirection: "column";
    justifyContent: TJustifyContent;
    alignItems: TAlignItems;
    flexWrap: "wrap";
    margin: string;
    gap: number;
    sx?: Partial<IBaseStyles>;
  }>
>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "stretch"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "unset"};
  margin: ${({ margin }) => margin || "0"};
  gap: ${({ gap }) => (gap || "0") + "px"};
  ${({ sx }) => baseStyles(sx)}
`;
