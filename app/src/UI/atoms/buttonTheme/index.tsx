import Image from 'next/image';

interface Props {
  theme: 'dark' | 'light';
  onClick: () => void;
}

const ButtonTheme = ({ onClick, theme = 'light' }: Props) => {
  return (
    <button onClick={onClick}>
      <Image
        alt={theme}
        height={20}
        width={20}
        className = 'dark:invert'
        priority
        src={theme === 'light' ? '/images/moon.svg' : '/images/sun.svg'}
      />
    </button>
  );
};

export default ButtonTheme;
