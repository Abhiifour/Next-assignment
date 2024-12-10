import icon1 from "@/resource/Groupe_25.png"
import icon2 from "@/resource/Groupe 503.png"
import icon3 from "@/resource/Groupe_56.png"
import icon4 from "@/resource/Groupe_123.png"
import Image from "next/image"


// Banner Section below Article similars .


export function Banner(){
    return (
        <div className="bg-gradient-to-b from-gradientPink to-gradientWhite h-[400px] flex flex-col gap-12 justify-center items-center ">
            <div className="box flex flex-col justify-center items-center gap-3">
            <div className="text-[35px] leading-[43px] font-medium text-black sm:text-[28px] ">
            On s’occupe de <span className="text-textblue font-extrabold">tout</span>
            </div>
            <div className="text-[14px] leading-[18px] text-primary sm:w-[70%] sm:leading-[14px] sm:text-center">
            Office ipsum you must be muted. It meeting commitment busy pain.
            </div>
            </div>
            <div className="flex  justify-center items-top sm:flex-wrap sm:gap-6">
                <div className="flex flex-col items-center gap-2 sm:gap-0">
                    <Image
                    src={icon1}
                    alt="icons"
                    className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]"/>
                  <div className="text-[20px] leading-[22px] mt-2 font-medium text-blackText sm:text-[16px]">Livraison & Reprise</div>
                  <div className="text-[14px] leading-[18px] text-primary sm:text-[12px]">Selon vos besoins</div>
                </div>
                <div className="line h-[1px] w-[100px] bg-brownText mt-6 sm:hidden"></div>

                <div className="flex flex-col items-center gap-2 sm:gap-0">
                    <Image
                    src={icon2}
                    alt="icons"
                    className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]"/>
                  <div className="text-[20px] leading-[22px] mt-2 font-medium text-blackText sm:text-[16px]">Nettoyage</div>
                  <div className="text-[14px] leading-[18px] text-primary sm:text-[12px]">Selon vos besoins</div>
                </div>

                <div className="line h-[1px] w-[100px] bg-brownText mt-6 sm:hidden"></div>

                <div className="flex flex-col items-center gap-2 sm:gap-0">
                    <Image
                    src={icon3}
                    alt="icons"
                    className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]"/>
                  <div className="text-[20px] leading-[22px] mt-2 font-medium text-blackText sm:text-[16px]">Commande Illimitée</div>
                  <div className="text-[14px] leading-[18px] text-primary sm:text-[12px]">Tout est possible</div>
                </div>

                <div className="line h-[1px] w-[100px] bg-brownText mt-6 sm:hidden"></div>

                <div className="flex flex-col items-center gap-2 sm:gap-0">
                    <Image
                    src={icon4}
                    alt="icons"
                    className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]"/>
                  <div className="text-[20px] leading-[22px] mt-2 font-medium text-blackText sm:text-[16px]">Transport & Enlèvement</div>
                  <div className="text-[14px] leading-[18px] text-primary sm:text-[12px]">On s’occupe de tout.</div>
                </div>
            </div>
        
        </div>
    )
}