import React from "react";
import Product from "./Product";

type ProductModel = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 4).map((i: ProductModel) => (
        <Product
          key={i.id}
          id={i.id}
          title={i.title}
          price={i.price}
          description={i.description}
          category={i.category}
          image={i.image}
        />
      ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products.slice(5, 6).map((i: ProductModel) => (
          <Product
            key={i.id}
            id={i.id}
            title={i.title}
            price={i.price}
            description={i.description}
            category={i.category}
            image={i.image}
          />
        ))}
      </div>
      {products.slice(5, products.length).map((i: ProductModel) => (
        <Product
          key={i.id}
          id={i.id}
          title={i.title}
          price={i.price}
          description={i.description}
          category={i.category}
          image={i.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
