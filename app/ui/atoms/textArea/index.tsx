interface Props {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const TextArea = ({ name, value, onChange, placeholder }: Props) => {
  return (
    <textarea
      rows={5}
      cols={50}
      className="text-middleBlack w-full font-openSans p-2 border dark:bg-bgDark border-primary dark:border-t-primary dark:text-middleWhite rounded-md focus:outline-primaryDark"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    ></textarea>
  );
};
export default TextArea;
