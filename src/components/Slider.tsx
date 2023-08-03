"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "high quality ingredients from italy",
    image: "/img1.png",
  },
  {
    id: 2,
    title: "we deliver everywhere in Brno",
    image: "/img2.png",
  },
  {
    id: 3,
    title: "the best Pizza in town",
    image: "/img3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-lightGold">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-gold font-bold mb-5">
        <h1 className="flex w-full justify-center text-5xl text-center uppercase md:text-6xl min-h-[200px] items-center">
          {data[currentSlide].title}
        </h1>
        <button className="bg-chelseaBlue text-white py-4 px-8 rounded-md hover:bg-gold duration-500 cursor-pointer">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider