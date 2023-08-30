import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const RingLoader = styled.div<{ color?: string; size?: number }>`
  display: inline-block;
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  border: 4px solid ${(props) => props.color || "blue"};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
