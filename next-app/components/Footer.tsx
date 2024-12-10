import Image from "next/image";
import logo from '@/resource/weframe.png'
import titleBrand from '@/resource/weframetitle.png'
import twitterLogo from '@/resource/twitter.png'
import instaLogo from '@/resource/instagram.png'
import linkedinLogo from '@/resource/linkedin-in.png'


// Example static data 
const data = [{
    title : 'INFOS PRATIQUES',
    link1 : 'À propos',
    link2 : 'Livraisons & Reprises',
    link3 : 'Mode demploi',
    link4 : 'F.A.Q'
},
{
    title : 'LÉGAL',
    link1 : 'Mentions légales',
    link2 : 'CGU',
    link3 : 'CGV',
    link4 : 'Politique de confidentia'
},
{
    title : 'MON COMPTE',
    link1 : 'Accéder à mon compte',
    link2 : 'Ma liste denvie',
    link3 : 'Créer un compte',
    link4 : 'Mot de passe oublié'
}]




export function Footer(){

    return (
        <div className=" w-full border-t p-12 mt-12 flex justify-between sm:p-6 ">
            <div className="left flex justify-center items-center gap-12 sm:flex-col">
             {/* image */}
             <div className="">
                <div className="img-wrapper w-[64px] h-[37px] m-auto ">
                    <Image
                    src={logo}
                    alt="logo"
                    className="w-[64px] h-[37px]"
                    />
                </div>
                <div className="title-wrapper w-[133px] h-[15px] m-auto mt-3">
                <Image
                    src={titleBrand}
                    alt="title"
                    className="w-[133px] h-[15px]"
                    />
                    
                </div>

             </div>
             {/* section 1 */}
             {
                data.map((item)=>(
                    <div className="flex flex-col gap-2 text-blackText font-geist sm:gap-1 sm:items-start sm:justify-start" key={item.title}>
                    <div className="text-[18px] leading-[22px] font-semibold sm:text-[16px] sm:leading-[16px]">{item.title}</div>
                    <div className="text-[14px] leading-[18px] ">{item.link1}</div>
                    <div className="text-[14px] leading-[18px]">{item.link2}</div>
                    <div className="text-[14px] leading-[18px]">{item.link3}</div>
                    <div className="text-[14px] leading-[18px]">{item.link4}</div>
                 </div>
                ))
             }

            
             {/* section 2 */}

         
            </div>
            <div className="right">
                <div className="text-end text-[18px] leading-[22px] text-blackText font-bold font-geist sm:text-[16px] sm:leading-[18px] sm:font-medium">NOUS SUIVRE</div>
                <div className="flex justify-evenly mt-3 gap-2">
                <div className="border rounded-lg overflow-hidden p-2 ">
                <Image
                    src={twitterLogo}
                    alt="logo"
                    className="w-[22px] h-[22px] sm:w-[15px] sm:h-[15px]"
                />
                </div>
                <div className="border rounded-lg overflow-hidden p-2">
                <Image
                    src={instaLogo}
                    alt="logo"
                    className="w-[22px] h-[22px] sm:w-[15px] sm:h-[15px]"
                />
                </div>
                <div className="border rounded-lg overflow-hidden p-2">
                <Image
                    src={linkedinLogo}
                    alt="logo"
                    className="w-[22px] h-[22px] sm:w-[15px] sm:h-[15px]"
                />
                </div>
                </div>
            </div>
        </div>
    )
}