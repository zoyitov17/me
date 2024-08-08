import React from "react";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-4/5 items-center justify-center h-4/5">
      <div className="w-full h-full flex flex-col items-center justify-center max-w-screen-sm">
        <div className="mt-10 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-center text-white text-4xl  font-sans font-bold md:text-3xl">
            You can recognize me from here😉👇
          </h2>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 border border-white">
            <a
              href="https://www.instagram.com/zoy1tov17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              MY INSTAGRAM
            </a>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 border border-white">
            <a
              href="https://t.me/zoyitov17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              MY TELEGRAM
            </a>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 border border-white">
            <a
              href="https://t.me/zoyitov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl custom-500:text-lg custom-400:text-md"
            >
              MY CHANNEL
            </a>
          </div>
          <div className="flex items-center justify-center w-full h-[90px] mt-14 mb-5 border border-white">
            <a
              href="tel:+998931907232"
              className="text-white font-sans font-semibold text-2xl hover:text-yellow-300 sm:text-1xl xs:text-lg custom-500:text-md custom-400:text-md custom-300:text-[18px]"
            >
              FOR SERVICES AND OFFERS
            </a>
          </div>
          <div className="flex items-center justify-center w-3/5 h-[90px] mt-8 border border-white">
            <button
              onClick={handleGoBack}
              className="text-white font-sans font-semibold text-3xl hover:text-yellow-300 sm:text-2xl xs:text-xl"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
