/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { TRequiredFields } from "../../../models/TRequiredFields";
import { StyledP } from "./index";

export interface ITextStyles {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  color: string;
  margin: string;
}

interface ITypography {
  styles: Partial<ITextStyles>;
  sx: Partial<IBaseStyles>;
  children: string;
}

type OptionalITypography = TRequiredFields<ITypography, "children">;

const Typography: FC<OptionalITypography> = ({ styles, children, sx }) => {
  return (
    <StyledP styles={styles} sx={sx}>
      {children}
    </StyledP>
  );
};

export default Typography;
