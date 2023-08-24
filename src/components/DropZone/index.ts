import styled from "@emotion/styled";
import { Colors } from "../../styles";

export const StyledDropZone = styled.div<{ isDragActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border: 4px dashed ${Colors.gray};
  ${({ isDragActive }) =>
    isDragActive ? "background: rgba(0, 0, 0, 0.1);" : ""}
`;

export const StyledSelect = styled.div`
  text-align: center;
  padding: 9px 19px;
  background: ${Colors.black};
  color: white;
  border-radius: 8px;
  z-index: 9;
`;

export const StyledDrop = styled.div`
  text-align: center;
  padding: 9px 19px;
  background: ${Colors.black};
  color: white;
  border-radius: 8px;
  z-index: 11;
`;

export const StyledImgWrapper = styled.div`
  z-index: 10;
  position: absolute;
`;

export const StyledDefaultImg = styled.img`
  position: absolute;
  width: 391px;
`;
