import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";

const Success = () => {
  console.log("Success page");
  console.log(process.env.HOST);
  console.log("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
  console.log("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
  console.log("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
  console.log("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
  console.log(process.env.STRIPE_SECRET_KEY);
  console.log(process.env.stripe_public_key);
  const router = useRouter();
  return (
    <div className=" bg-gray-100 h-screen">
      <Header />
      <main className=" max-w-screen-lg mx-auto ">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center  space-x-2 mb-5 ">
            <CheckCircleIcon className=" text-green-500 h-10" />
            <h1 className=" text-3xl ">Your Order has been confirmed</h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has shipped. if you would like to check the status of your
            order.{" "}
          </p>
          <button onClick={() => router.push(`/order`)} className="button">
            Go to my Order
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
