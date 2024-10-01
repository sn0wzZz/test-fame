import Footer from "@/partials/Footer";
import Header from "@/partials/Header/Header";
import React, { FC } from "react";

const ThankYou: FC = () => {
  return (
    <div className="overflow-x-hidden h-screen relative">
      <Header />
      <div
        className="flex mt-24 flex-col max-w-5xl mx-auto justify-center relative h-2/3"
        style={{
          backgroundImage: "url(../../images/f.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="px-12 py-10">
          <h1 className="text-left text-3xl md:text-5xl font-bold leading-none break-words max-w-2xl mb-2 uppercase">
            Thank You!
          </h1>
          <p className="max-w-sm break-all text-gray-700 mb-1">
            We will decide the future of this project TOGETHER
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
