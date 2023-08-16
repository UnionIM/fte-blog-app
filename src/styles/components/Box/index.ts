import styled from "@emotion/styled";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { baseStyles } from "../../baseStyles";

export const StyledBox = styled.div<{ sx?: Partial<IBaseStyles> }>`
  ${({ sx }) => baseStyles(sx)}
`;
