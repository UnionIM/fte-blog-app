import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Flex from "../../../styles/components/Flex/Flex";

interface LoaderProps {
  color?: string;
  size?: number;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const RingLoader = styled.div<LoaderProps>`
  display: inline-block;
  width: ${(props) => props.size || 40}px;
  height: ${(props) => props.size || 40}px;
  border: 4px solid ${(props) => props.color || "blue"};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader: React.FC<LoaderProps> = ({ color, size }) => {
  return (
    <Flex justifyContent={"center"}>
      <RingLoader color={color} size={size} />
    </Flex>
  );
};

export default Loader;
