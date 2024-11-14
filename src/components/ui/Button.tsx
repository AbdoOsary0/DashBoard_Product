import { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className?: string,
  width?: "w-full" | "w-fit",

}
const Button = ({ className, children, width="w-full", ...rest }: IProps) => {
  return (
    <button className={`${className} text-white  py-2 rounded-md ${width}`} {...rest}>{children}</button>
  );
}

export default Button;