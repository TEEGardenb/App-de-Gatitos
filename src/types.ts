import { MouseEventHandler } from "react";

export interface buttonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
