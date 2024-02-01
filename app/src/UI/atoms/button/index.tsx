import { Props } from './type';

const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="p-2.5 bg-primary hover:cursor-pointer rounded-md">
      {children}
    </button>
  );
};

export default Button;
