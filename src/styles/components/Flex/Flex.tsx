import React, { FC, ReactNode } from "react";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { StyledFlex } from "./index";
import { TRequiredFields } from "../../../models/TRequiredFields";
import { TAlignItems, TJustifyContent } from "../../StylesTypes";

interface IFlex {
  flexDirection: "column";
  justifyContent: TJustifyContent;
  alignItems: TAlignItems;
  flexWrap: "wrap";
  margin: string;
  gap: number;
  sx: Partial<IBaseStyles>;
  children: ReactNode | ReactNode[];
}

export type OptionalIFlex = TRequiredFields<IFlex, "children">;

const Flex: FC<OptionalIFlex> = (props) => {
  return (
    <StyledFlex {...props} {...props.sx}>
      {Array.isArray(props.children)
        ? props.children.map((children) => children)
        : props.children}
    </StyledFlex>
  );
};

export default Flex;
