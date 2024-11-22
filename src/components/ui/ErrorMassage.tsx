interface IProps {
  massage: string;

}
const ErrorMassage = ({ massage }: IProps) => {
  return massage ? <span className="black text-red-700 font-semibold text-sm">{massage}</span> : null
}

export default ErrorMassage;