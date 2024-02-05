import { HTMLInputTypeAttribute } from 'react';

interface Props {
  value: string;
  name: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}
const Input = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  children
}: Props) => {
  return (
    <div className="">
      <input
        name={name}
        className="text-middleBlack w-full py-2.5 px-3 text-base border font-openSans border-primary dark:border-t-primary dark:bg-bgDark  focus:outline-primaryDark dark:text-white active:border-primary active:outline-none rounded-md"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  );
};
export default Input;
