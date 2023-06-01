import type { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

// type CustomProps = {bgColor?: string}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  color?:string;
  pointer?: boolean;
}

function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export default Button;
export type { ButtonProps };
