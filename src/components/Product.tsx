import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
import Currency from "react-currency-formatter";

const MAX_RATE = 5;
const MIN_RATE = 1;

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: Product) => {
  const [rating, setRating] = useState<number>(
    Math.floor(Math.random() * (MAX_RATE - MIN_RATE + 1)) + MIN_RATE
  );

  const [hasPrime] = useState<boolean>(Math.random() < 0.5);
  return (
    <div className="flex flex-col relative bg-white m-5 p-10 ">
      <div className="absolute top-2 right-2 text-xs italic text-gray-400">
        <p>{category}</p>
      </div>
      <p>title:{category}</p>
      <Image src={image} height={300} width={200} objectFit="contain" />
      <h4 className=" my-3">{title}</h4>

      <div className="flex">
        {Array<number>(rating)
          .fill(rating)
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-300" />
          ))}
      </div>

      <p className="text-xs mt-2 mb-2  line-clamp-3"> {description}</p>
      <div className="mb-5 ">
        <Currency quantity={price} />
      </div>
      {hasPrime && (
        <div className="flex space-x-2 items-center -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-day Delli</p>
        </div>
      )}
      <button className="button">カードに入れる</button>
    </div>
  );
};

export default Product;
