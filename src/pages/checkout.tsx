import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const Checkout = () => {
  console.log("create-checkout-session");
  console.log(`${process.env.HOST}`);
  console.log(
    "Change_String☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆"
  );
  console.log("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
  console.log("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
  console.log("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆");
  // console.log(process.env.STRIPE_SECRET_KEY);
  // console.log(process.env.stripe_public_key);

  const [session] = useSession();
  const item = useSelector(selectItems);
  const total = useSelector(selectTotal);
  // const stripePromise = loadStripe(process.env.stripe_public_key);
  const stripePromise = loadStripe(
    "pk_test_51IwFcYDBBKyfRFrR568yLnZCeJeDiQWPGYFLuxpH5xgEwZLRwEZ454RDVpDYDpuFVHeMUs8wKeMWGXuVXf5T3HyE00GT3SLZGQ"
  );

  const createCheckOut = async () => {
    console.log("check string Now");
    console.log(`${process.env.HOST}`);
    console.log(`${process.env.stripe_public_key}`);
    const stripe = await stripePromise;

    const checkoutSession = await axios.post(`/api/create-checkout-session`, {
      items: item,
      email: session.user.email,
    });

    //Redirect user/customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {item.length === 0
                ? "ショッピングリスト"
                : "ショッピングカートは空です。"}
            </h1>
            {item.map((item, i) => (
              <div>
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col   p-10 shadow-md ">
          {item.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                SubTitle ({item.length}):
                <span className="font-bold ">
                  <Currency quantity={total} />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckOut}
                disabled={!session}
                className={`button  ${
                  !session &&
                  " from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "
                }`}
              >
                {!session ? "Sigh in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
