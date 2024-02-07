import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="animate__animated animate__fadeIn sm:w-80 h-5/6 p-4 border-2 border-white bg-white dark:bg-transparent rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-150 dark:border-bgDark dark:hover:border-primary">
      <h4 className="text-lg text-middleBlack font-openSansBold dark:text-middleWhite">
        {title}
      </h4>
      <div className="flex flex-col p-2 justify-between gap-4">
        <Image
          priority
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-32 rounded-lg my-2 object-cover"
        />
        <p className="font-openSans text-middleBlack text-base overflow-ellipsis dark:text-middleWhite">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
