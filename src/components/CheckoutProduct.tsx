import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

type CheckoutProductType = {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  image: string;
  hasPrime: boolean;
};

const CheckoutProduct = (props: CheckoutProductType) => {
  console.log("checkout product");
  const disPatch = useDispatch();
  const addItem = () => {
    // const product_list = {};
    const product_list = { ...props };
    //   const product_list={
    //     props.id
    //     props.title,
    //     propsprice
    //     rating
    //     description
    //     category
    //     image
    //     hasPrime
    //   }
    disPatch(addToBasket(product_list));
  };

  const removeItem = () => {
    disPatch(removeFromBasket(props.id));
  };

  return (
    <div className="grid  grid-cols-5">
      <Image src={props.image} height={200} width={200} objectFit="contain" />
      <div className=" col-span-3 m-5 ">
        <p>{props.title}</p>
        <div className="flex">
          {Array<number>(props.rating)
            .fill(props.rating)
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-300" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{props.description}</p>
        <Currency quantity={props.price} />
        {props.hasPrime && (
          <div className="flex justify-items-center item-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className=" text-xs text-gray-500">FREE Next-day Deliery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 justify-self-end">
        <button className="button" onClick={addItem}>
          Add to basket
        </button>
        <button className="button" onClick={removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
