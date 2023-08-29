import React, { FC, ReactNode } from "react";
import { StyledBox } from "./index";
import { IBaseStyles } from "../../../models/IBaseStyles";

interface IBox {
  sx: Partial<IBaseStyles>;
  children: ReactNode | ReactNode[];
}

const Box: FC<Partial<IBox>> = ({ children, ...restProps }) => {
  return <StyledBox {...restProps}>{children}</StyledBox>;
};

export default Box;
