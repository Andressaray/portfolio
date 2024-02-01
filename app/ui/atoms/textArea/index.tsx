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
      className="w-full font-openSans p-2 border border-primary dark:bg-bgDark dark:text-middleWhite rounded-md"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    ></textarea>
  );
};
export default TextArea;
