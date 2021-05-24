import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function Home({ products }) {
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Main */}
      <main className="max-w-screen-lg mx-auto  ">
        {/* バナー */}
        <Banner />
        {/* 製品 */}
        <ProductList products={products} />
        <p>{}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch(`https://fakestoreapi.com/products`).then(
    (res) => res.json()
  );

  return {
    // props キーに対応する { foo } オブジェクトが
    // （冗長に書けば { foo : foo } すなわち foo というキー名に対して foo 変数の中身（'Hello'）を値として持つオブジェクトが）
    // ページコンポーネント（Page）に渡される
    props: { products },
  };
}

// https://fakestoreapi.com/products
