import { buttonProps } from "../types";

export const Button = ({ text, onClick }: buttonProps) => {
  return <button onClick={onClick}>{text}</button>;
};
