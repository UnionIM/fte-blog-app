import styled from "@emotion/styled";
import { IInput } from "./Input";
import { Colors } from "../../../styles/colors";

export const StyledInput = styled.input`
  border-color: ${({ borderColor }: IInput) => Colors[borderColor || "blue"]};
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  padding: 9px;
`;
