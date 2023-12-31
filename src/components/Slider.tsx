"use client";
import { SliderContents } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GetImage from '@/utils/getImage';
import { useRouter } from "next/navigation";

type Props = {
  data: SliderContents
}

const Slider = ({data}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter()
  
  const imageProps: any = data[currentSlide]?.image
    ? GetImage(data[currentSlide].image)
    : null

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-gold font-bold mb-5 px-2">
        <h1 className="flex w-full justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center uppercase min-h-[200px] items-center">
          {data[currentSlide].title}
        </h1>
        <button onClick={() => router.push('/menu')} className="bg-chelseaBlue text-white py-4 px-8 rounded-md hover:bg-gold duration-500 cursor-pointer">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          alt="sliderImage"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider