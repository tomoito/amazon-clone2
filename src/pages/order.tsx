import { getSession, useSession } from "next-auth/client";
import { delBasePath } from "next/dist/next-server/lib/router/router";
import React from "react";
import Header from "../components/Header";
import OrderItem from "../components/OrderItem";
import moment from "moment";

import db from "../../firebase";

const Order = ({ orders }) => {
  console.log(orders);
  const [session] = useSession();
  return (
    <div>
      <Header />
      <main className=" max-w-screen-lg mx-auto p-10">
        <h1 className=" text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? <h2>X orders</h2> : <h2>Please sign in your order</h2>}
        <div className=" mt-5 space-x-4"></div>

        <div className=" mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <OrderItem
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Order;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  //Get user logged in creditailal
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  const stripeOrder = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  //stripe orders
  const orders = await Promise.all(
    stripeOrder.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
    },
  };
}
