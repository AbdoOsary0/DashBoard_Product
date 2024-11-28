import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;

}
const CircleColors = ({ color, ...rest }: IProps) => {
  return (
    <span
      className="block w-5 h-5 rounded-full border border-gray-300 cursor-pointer mb-1"
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
}

export default CircleColors;