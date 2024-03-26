
import { Card } from 'flowbite-react';
import Image from 'next/image';

type Props = {
    title : string ;
    description : string;
     image : string;
};

function CardComponent({ title, description , image } : Props) {
  return (
    <Card className="max-w-sm" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
      </p>
    </Card>
  );
}




export default CardComponent;