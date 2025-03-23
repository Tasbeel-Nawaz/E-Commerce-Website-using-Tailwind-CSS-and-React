import React from "react";
import { Link, useLocation } from "react-router-dom";
import Fake from "../assets/ebay.png";
import Ecom from "../assets/ecom.png";
import Shop from "../assets/shop.png";
import Ban from "../assets/ban.jpg";

export default function Banner({ setSearchQuery }) {
  const location = useLocation(); 

  const hideBannerPages = [
    "/about",
    "/content",
    "/ebay",
    "/ecom",
    "/shop",
    "/Top-Categories",
    "/Top-Products",
    "/Top-deals",
    "/ricy",
    "/Follow",
  ];

  const isBannerHidden = hideBannerPages.includes(location.pathname);

  return (
    <>
      {!isBannerHidden && (
        <>
          <img
            src={Ban}
            alt="Banner"
            className="absolute top-25 w-[100vw] h-70 filter brightness-75 left-0"
          />
          <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-[40%]">
            <input
              type="text"
              placeholder="What Are You Shopping For?"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 bg-gray-100 rounded-l-md text-black"
            />
            <button className="bg-orange-500 absolute h-10 w-20 font-bold text-1xl rounded-r-md">
              Search
            </button>
          </div>
          <div className="bg-gray-800 w-[90%] absolute top-[300px] left-1/2 transform -translate-x-1/2 h-[180px]">
            <p className="text-white top-4 left-5 font-bold text-3xl absolute">
              Retailers We Work With
            </p>
            <div className="flex justify-between items-center absolute top-8 w-full md:space-y-0">
              <Link
                to="/ebay"
                className="w-40 sm:w-48 md:w-60 p-2 rounded-lg transition-all duration-300"
              >
                <img
                  src={Fake}
                  className="absolute h-auto cursor-pointer rounded-lg hover:opacity-80 hover:bg-gray-700 mt-19 md:mt-10 md:w-55 w-30"
                  alt="Fake"
                />
              </Link>

              <Link
                to="/ecom"
                className="w-40 sm:w-48 md:w-60 p-2 rounded-lg transition-all duration-300"
              >
                <img
                  src={Ecom}
                  className="absolute h-auto cursor-pointer rounded-lg hover:opacity-80 hover:bg-gray-700 mt-15 md:mt-1 w-28 md:w-55 sm:w-35 sm:mt-12"
                  alt="Ecom"
                />
              </Link>
              <Link
                to="/shop"
                className="w-40 sm:w-48 md:w-60 p-2 rounded-lg transition-all duration-300"
              >
                <img
                  src={Shop}
                  className="absolute h-auto cursor-pointer rounded-lg hover:opacity-80 hover:bg-gray-700 mt-12 md:mt-1 w-22 md:w-35 sm:w-30 sm:mt-4"
                  alt="Shop"
                />
              </Link>
            </div>
            <div>
              <p className="mt-[200px] -ml-10 font-bold text-4xl text-white">
                Top-Categories
              </p>
              <Link to="/Top-Categories">
                <p className="font-[Arial] absolute right-0 -mt-10 cursor-pointer hover:border-b-2 font-bold text-2xl text-blue-500">
                  See more
                </p>
              </Link>
              <Link to="/Top-Products">
                <p className="font-[Arial] absolute right-0 mt-55 cursor-pointer hover:border-b-2 font-bold text-2xl text-blue-500">
                  See more
                </p>
              </Link>
              <Link to="/Top-deals">
                <p className="font-[Arial] absolute right-0 mt-125 cursor-pointer hover:border-b-2 font-bold text-2xl text-blue-500">
                  See more
                </p>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
