import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="animate__animated animate__fadeIn sm:w-80 h-5/6 p-4 border-2 border-white bg-white dark:bg-transparent rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition ease-in-out delay-150 hover:-translate-y-0.5 dark:border-bgDark dark:hover:border-primary hover:scale-110 duration-300 z-0 hover:z-40">
      <h4 className="text-lg font-openSansBold dark:text-middleWhite">
        {title}
      </h4>
      <div className="flex flex-col p-2 justify-between gap-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-32 rounded-lg my-2 object-cover"
        />
        <p className="font-openSans text-base overflow-ellipsis dark:text-middleWhite">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
