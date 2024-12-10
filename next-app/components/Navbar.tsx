import WeframeLogo  from "@/resource/weframe.png"
import Image from "next/image"
import orgName from "@/resource/weframetitle.png"
import heartIcon from "@/resource/heart.png"
import bulbIcon from "@/resource/lightbulb.png"
import downIcon from "@/resource/downicon.png"

import cartIcon from "@/resource/cart.png"
import { InputField } from "./InputField"

//Static link data

const links = ["Art de la table",'Mobilier','Nappage','Matériel de salle','Cuisine','Barbecue','Tente','Chauffage','Podium - Piste de danse','Son et lumière','Packs,Consommables']


// Navigation Section
//

export function Navbar(){
    return (<div className="p-1 text-center border-b sm:w-full">
        {/* Top Section containing organisation logo , search bar , profile section */}
        <div className="top-section text-center p-5 flex justify-between sm:max-w-full">
            <div className="left-section flex items-center gap-4 sm:flex-col sm:w-full">
                {/* organisation's logo */}
                <div className="logo flex flex-col justify-center items-center">
                    <div className="logo-wrapper w-[70px] h-[40px]">
                        <Image 
                         src={WeframeLogo}
                         
                         className="w-[70px] h-[40px]"
                         alt="weframe logo"
                        />
                    </div>
                    <div className="title-wrapper w-[130px] h-[15px] mt-2">
                    <Image
                     src={orgName}
                     className="w-[130px] h-[15px]"
                     alt="organisation name"
                    />
                    </div>
                </div>
                {/* Search Bar */}
               <InputField/>
            </div>
            {/* Profile Section having cart , inspiration . */}
            <div className="right-section flex gap-4 h-[48px] sm:hidden">
                {/* Inspiration */}
                <div className="box1 flex items-center justify-center gap-2 text-[14px] font-semibold">
                <Image 
                src={bulbIcon}
                className="w-[18px] h-[18px]"
                alt="bulb icons"/>
                <div className="font-medium font-poppins text-[14px] leading-[21px]">Inspirations</div>
                </div>
                {/* Mes Favoris */}
                <div className="box2 flex items-center justify-center gap-2 font-semibold">
                <Image 
                src={heartIcon}
                className="w-[20px] h-[20px]"
                alt="bulb icons"/>
                <p className=" font-medium font-poppins text-[14px] leading-[21px] sm:hidden">Mes favoris</p>
                <div className="rounded-xl bg-slate-200 text-[10px] px-2 py-1 sm:hidden">
                    24
                </div>
                </div>
                {/* Cart */}
                <div className="box3 flex items-center justify-center gap-2 bg-bgblue border-borderblue p-3 rounded-lg">
                    <Image 
                    src={cartIcon}
                    alt="cart-icon"
                    className="w-[20px] h-[20px] " />
                    <p className="text-white font-medium font-poppins text-[14px] leading-[21px] sm:hidden">Panier</p>
                </div>
                {/* Cart */}
                <div className="profile flex gap-2 items-center justify-center">

                    <div className="w-[44px] h-[44px] rounded-full bg-profilebg">

                    </div>
                    <div className="flex gap-1 justify-center items-center">
                    <p className="font-medium font-poppins text-[14px] leading-[14px]">FG</p>
                    <Image 
                    src={downIcon}
                    alt="down-icon"
                    className="w-[10px] h-[10px] " />
                   
                    </div>

                </div>
            </div>
        </div>
        {/* Bottom section - Navigation links  */}
        <div className="top navlinks -section text-center  flex justify-evenly text-[14px] leading-[21px] text-gray-500 font-medium uppercase mt-2 sm:hidden">
            {
                links.map(link =>  <div key={link} className="link font-inter cursor-default hover:font-semibold hover:text-bgblue text-[14px] leading-[21px]">{link}</div>)
            }
           
        </div>
    </div>)
}