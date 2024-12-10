"use client"

import Image from "next/image";
import { ProductCard } from "./ProductCard";
import arrowRight from '@/resource/arrow-right.png'
import arrowLeft from '@/resource/arrow-left.png'
import { useState } from "react";

// Component to render product collections

export default function ProductCollection( props : {width : string , elementNo : number}) {
  const [isHovered, setIsHovered] = useState(false);

    return (
      <div className= "p-6 relative " onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        {
          isHovered ? <>
          <div className="w-[40px] h-[40px] bg-textblue flex items-center justify-center absolute right-0 bottom-[50%] sm:hidden cursor-pointer">
        <Image
        src={arrowRight}
        alt="arrow-right"
        className="w-[24px] h-[24px] sm:hidden "/>
        </div>
        <div className="w-[40px] h-[40px] bg-textblue flex items-center justify-center absolute left-0 bottom-[50%] sm:hidden cursor-pointer">
        <Image
        src={arrowLeft}
        alt="arrow-right"
        className="w-[24px] h-[24px] sm:hidden"/>
        </div></> : ""
        }
       <div className="flex items-center justify-between ">
        <div className="text-[35px] leading-[44px] p-2 text-blackText font-medium sm:text-[20px] sm:leading-[25px]">
        Articles similaires
        </div>
        <div className="uppercase underline text-[16px] leading-[20px] underline-offset-4 font-medium sm:text-[10px] sm:leading-[16px]">
        Voir toute la collection
        </div>
       </div>

       <div className="flex justify-evenly items-center mt-4 sm:flex-wrap sm:gap-10 sm:mb-6">

       {
        Array.from({ length: props.elementNo }).map((_, i) => (
          <ProductCard key={i} width={props.width} />
        ))
       }
       
        
       </div>
      </div>
    );
  }
  