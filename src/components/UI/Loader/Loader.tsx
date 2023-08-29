import React from "react";
import Flex from "../../../styles/components/Flex/Flex";
import { RingLoader } from "./styled";

interface LoaderProps {
  color?: string;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ color, size }) => {
  return (
    <Flex justifyContent={"center"}>
      <RingLoader color={color} size={size} />
    </Flex>
  );
};

export default Loader;
