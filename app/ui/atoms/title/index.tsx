interface Props {
  text: string;
}
const Title = ({ text }: Props) => {
  return <h3 className="text-move text-2xl font-openSansBold mb-5 dark:text-middleWhite">{text}</h3>;
};
export default Title;
