import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="flex w-4/5 items-center justify-center h-4/5">
      <div className="w-full h-full flex flex-col items-center justify-center max-w-screen-sm">
        <div className="mt-10 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white font-sans font-bold mb-5 text-5xl md:text-4xl sm:text-3xl xs:text-2xl custom-500:text-[26px] custom-400:text-[26px]">
            Adhamjon Zoyitov
          </h1>
          <div className="flex items-center justify-center w-full h-[90px] mt-16 border border-white md:mt-10 sm:mt-8 custom-500:mt-6 custom-400:mt-4">
            <Link
              to="/aboutme"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              ABOUT ME
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 border border-white md:mt-10 sm:mt-8 custom-500:mt-6 custom-400:mt-4">
            <a
              href="https://t.me/zoyitov17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              MY TELEGRAM
            </a>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 border border-white md:mt-10 sm:mt-8 custom-500:mt-6 custom-400:mt-4">
            <a
              href="https://www.instagram.com/zoy1tov17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              MY INSTAGRAM
            </a>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 border border-white md:mt-10 sm:mt-8 custom-500:mt-6 custom-400:mt-4">
            <a
              href="https://t.me/zoyitov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              MY CHANNEL
            </a>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 border border-white md:mt-10 sm:mt-8 custom-500:mt-6 custom-400:mt-4">
            <a
              href="https://incandescent-entremet-e3e59c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              MY WEBSITE
            </a>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 mb-5 border border-white md:mt-10 sm:mt-8 custom-500:mt-6 custom-400:mt-4">
            <a
              href="tel:+998931907232"
              className="text-white font-sans font-semibold text-2xl hover:text-yellow-300 sm:text-1xl xs:text-lg custom-500:text-md custom-400:text-md"
            >
              FOR SERVICES AND OFFERS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
