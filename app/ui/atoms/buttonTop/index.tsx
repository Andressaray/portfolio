import Image from "next/image";
interface Props {
  onClick: () => void;
}

const ButtonTop = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="fixed rounded-md border-2 border-transparent hover:border-primary dark:hover:border-primaryDark bottom-5 right-7 z-50 cursor-pointer p-2"
    >
      <Image alt="arrow-up" src={'/images/up-arrow.svg'} width={30} height={30} priority />
    </button>
  );
};
export default ButtonTop;
