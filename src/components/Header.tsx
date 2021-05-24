import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  console.log("hoge");
  return (
    <header className="w-screen sticky ">
      <div className=" w-screen flex items-center bg-amazon_blue p-2 flex-grow">
        <div className="flex item-center flex-grow sm:flex-grow-0">
          <Image
            src="https://amazon-press.jp/.imaging/AMZ_detail_asset_png/dam/c104a672-d691-42cd-aebc-cab83f8c3b12.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        {/* Middle */}
        <div className=" bg-yellow-400 hidden sm:flex items-center h-10 rounded-md flex-grow flex-shrink cursor-pointer hover:bg-yellow-600 ">
          <input
            type="text"
            className="h-full p-2 w-6 flex-grow  rounded-l-md hover:outline-none   "
          />
          <SearchIcon className="h-12 p-4 " />
        </div>

        {/* Right */}
        <div className="flex text-white items-center text-xs space-x-4 mx-5 whitespace-nowrap">
          <div className="cursor-pointer link">
            <p>伊藤ともつね</p>
            <p className="font-extrabold md:text-sm">アカウントリスト</p>
          </div>
          <div className="cursor-pointer link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">Order</p>
          </div>
          <div className="cursor-pointer link relative flex items-center">
            <span className=" absolute top-0 right-0  md:right-10 h-4 w-4 rounded-full  bg-yellow-300 text-center text-black">
              4
            </span>
            <ShoppingCartIcon className="h-10  " />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2  ">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex item-center bg-amazon_blue-light text-white text-sm space-x-3 pl-6 p-2 ">
        <MenuIcon className=" h-5 mr-1" />
        <p className="link ">All</p>
        <p className="link ">Prime Video</p>
        <p className="link ">Amazon Business</p>
        <p className="link lg:inline hidden">今日のセール</p>
        <p className="link lg:inline hidden">エレクトリカル</p>
      </div>
    </header>
  );
};

export default Header;
