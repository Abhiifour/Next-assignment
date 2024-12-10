'use client'

import searchIcon from "@/resource/search.png"
import Image from "next/image"
import rightArrow from '@/resource/arrow-right.png'

// Input fields for client side rendering ;

export function InputField(){
    return (
        <div>
             <div className="input-box flex items-center font-geist sm:w-full rounded-md">
                <input type="text" placeholder="Rechercher un produit" className="w-[700px] h-[50px] border-none outline-none bg-bggrey pl-4 text-searchText text-[14px] leading-[21px] "></input>
                <button type="submit" className="bg-bggrey p-0 border-none outline-none h-[50px] w-[50px] ">
                    <Image
                    src={searchIcon}
                    alt="icon"
                    className="w-[24px] h-[24px] m-auto sm:w-[16px] sm:h-[12px] sm:pr-1"/>
                </button>
                </div>
        </div>
    )
}


export function Subscribe(){
    return (
        <div>
             <div className="input-box flex items-center gap-4 mt-8 sm:gap-2">
                <input type="text" placeholder="john@doe.com" className="w-[700px] h-[50px] border-none outline-none rounded-lg font-geist font-light bg-white pl-4 text-bannerText text-[18px] leading-[18px] sm:w-[90%] sm:text-[14px] sm:h-[40px]"></input>
                <button type="submit" className="bg-textblue p-0 border-none outline-none w-[150px] h-[50px] rounded-lg  text-[18px] leading-[18px] text-white font-semibold sm:text-[14px] sm:h-[40px] flex items-center justify-center gap-2">
                    
                    <div>Subscribe</div>
                    <Image
                    src={rightArrow}
                    alt="icon"
                    className="w-[18px] h-[18px] "/>
                </button>
                </div>
        </div>
    )
}