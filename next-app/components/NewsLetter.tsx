import buffet from "@/resource/buffet.png"
import Image from "next/image"
import { Subscribe } from "./InputField"


// Newslater Subscription section
export function NewsLetter(){
    return (
        <div className="flex gap-5 justify-center p-6 sm:flex-col sm:w-full">
            <div className="w-[40%] rounded-xl overflow-hidden sm:w-full">
            <Image 
            src={buffet}
            alt="ad"
            className=" w-full h-[300px] sm:h-[200px]"/>
            </div>
            <div className="bg-gradientPink p-10 w-[60%] rounded-xl sm:w-full">
                <div className="font-medium text-[43px] leading-[53px] text-blackText sm:text-[32px] sm:leading-[40px]">{`S’inscrire `}& économiser <span className="text-textblue  ">10% </span></div>
                <div className=" mt-6 text-bannerText text-[14px] leading-[22px] font-medium font-geist">Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. 
                    Yet busy any meeting shark light marginalised 4-blocker message. 
                    Productize corporate nail caught synergy highlights lunch. 
                    Company another pushback items dear or any.
                </div>
                <Subscribe/>
            </div>
           
        </div>
    )
}