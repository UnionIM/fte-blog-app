import React, { FC, ReactNode } from "react";
import { StyledGrid } from "./index";
import { TRequiredFields } from "../../../models/TRequiredFields";
import { TAlignItems, TJustifyContent } from "../../StylesTypes";

interface IGrid {
  justifyContent: TJustifyContent;
  alignItems: TAlignItems;
  gridTemplateColumns: string;
  gap: number;
  children: ReactNode | ReactNode[];
}

type OptionalIGrid = TRequiredFields<IGrid, "children">;

const Grid: FC<OptionalIGrid> = ({ children, ...restProps }) => {
  return <StyledGrid {...restProps}>{children}</StyledGrid>;
};

export default Grid;
