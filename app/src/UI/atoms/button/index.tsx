import { Props } from "./type";

const Button = ({ children, onClick }: Props) => {
    return (
        <button onClick={onClick} className="p-2 bg-black hover:cursor-pointer">
            {children}
        </button>
    );
};

export default Button;
