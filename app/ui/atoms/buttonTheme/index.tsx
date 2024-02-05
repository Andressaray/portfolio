import Image from 'next/image';

interface Props {
  theme: 'dark' | 'light';
  onClick: () => void;
}

const ButtonTheme = ({ onClick, theme = 'light' }: Props) => {
  const themeImages = {
    light : 'https://res.cloudinary.com/villavicencio/image/upload/v1707094590/jobs/rh0zxyvs3gdf9g05ar4b.svg',
    dark: 'https://res.cloudinary.com/villavicencio/image/upload/v1707094590/jobs/ihdwqsjwklsiz8yvrwhj.svg'
  }
  return (
    <button onClick={onClick}>
      <Image
        alt={theme}
        height={20}
        width={20}
        className = 'dark:invert'
        priority
        src={themeImages[theme]}
      />
    </button>
  );
};

export default ButtonTheme;
