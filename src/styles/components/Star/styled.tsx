import React, { FC } from "react";
import { EmptyStar, FilledStar } from "./index";

const Star: FC<{ filled?: boolean }> = ({ filled }) => {
  return filled ? <FilledStar>★</FilledStar> : <EmptyStar>☆</EmptyStar>;
};

export default Star;
