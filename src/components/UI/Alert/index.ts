import styled from "@emotion/styled";
import { Colors } from "../../../styles/colors";
import { IBaseStyles } from "../../../models/IBaseStyles";
import { baseStyles } from "../../../styles/baseStyles";

export const StyledAlert = styled.div<{
  sx?: Partial<IBaseStyles>;
  bgColor: "red" | "yellow" | "green";
}>`
  border-radius: 8px;
  color: white;
  background-color: ${({ bgColor }) => getBgColor(bgColor)};
  padding: 8px 15px;
  text-align: center;
  ${({ sx }) => baseStyles(sx)}
`;

const getBgColor = (color: "red" | "yellow" | "green") => {
  switch (color) {
    case "red":
      return Colors.lightRed;
    case "yellow":
      return Colors.lightYellow;
    case "green":
      return Colors.lightGreen;
    default:
      return Colors.lightRed;
  }
};
