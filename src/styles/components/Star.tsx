import React, { FC } from "react";
import styled from "@emotion/styled";

const FilledStar = styled.span`
  color: yellow;
`;

const EmptyStar = styled.span`
  color: gray;
`;

const Star: FC<{ filled?: boolean }> = ({ filled }) => {
  return filled ? <FilledStar>★</FilledStar> : <EmptyStar>☆</EmptyStar>;
};

export default Star;
