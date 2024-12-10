import machineImg from '@/resource/machine.png'
import tableImg from '@/resource/table.png'
import heartIcon from '@/resource/Vector.png'
import icon1 from '@/resource/icon1.png'
import plus from '@/resource/plus.png'

import icon2 from '@/resource/icon2.png'


import Image from 'next/image'


// Product details 

export function Product (){

    return (
        <div className="main-section p-6 ">
            
            <div className='flex justify-start items-center py-4 gap-2 font-geist'>
            <span className='text-[14px] leading-[21px] font-semibold text-blackText'>Home</span> <span className='w-[5px] h-[5px] bg-primary rounded-full'></span> <span className=' font-medium text-[14px] leading-[21px] text-primary'>Art de la table</span>
            </div>
            <div className="flex gap-6 sm:flex-col">
                {/* Product image section */}
                <div className="product-img w-[750px] h-[650px] bg-productbg flex gap-6 p-6 rounded-md sm:w-full sm:h-[300px]">
                    <div className="select-icon flex flex-col gap-2">
                        <div className='box'>
                         <Image
                         src={tableImg}
                         alt="table-img"
                         className=" w-[40px] h-[40px] rounded-md"/>
                        </div>

                        <div className='box'>
                         <Image
                         src={tableImg}
                         alt="table-img"
                         className=" w-[40px] h-[40px] opacity-50 rounded-md"/>
                        </div>

                        <div className='box'>
                         <Image
                         src={tableImg}
                         alt="table-img"
                         className=" w-[40px] h-[40px] opacity-50 rounded-md"/>
                        </div>

                        <div className='box'>
                         <Image
                         src={tableImg}
                         alt="table-img"
                         className=" w-[40px] h-[40px] opacity-50 rounded-md"/>
                        </div>

                    </div>
                    <div className='product-img flex items-center h-full w'>
                        <div>
                        <Image
                         src={machineImg}
                         alt="table-img"
                         className=" w-[550px] h-[550px] bg-productbg sm:w-[300px] sm:h-[300px]"/>
                        </div>
                    </div>
                </div>
                {/* Product specification section */}
                <div className='product-title w-[750px] p-2 flex flex-col justify-between sm:w-full'>
                 <div>
                 <div className='flex justify-between items-center sm:w-full'>
                    <p className='text-[30px] leading-[37px] font-normal font-playfair sm:text-[20px] sm:leading-[20px]'>Cheese - appareil à raclette 1/2 roue</p>
                    <Image
                    src={heartIcon}
                    alt='heart-icon'
                    className='w-[25px] h-[25px] sm:w-[15px] sm:h-[15px]'
                   
                    />
                   </div>
                   <div className='price text-[24px] leading-[30px] flex items-center gap-1 font-geist sm:text-[16px]'>
                   39,50€ <span className='text-primary text-[14px] leading-[17px] sm:text-[12px]'>/pièce</span>
                   </div>
                   <div className='third-section flex justify-between items-center border-b border-t py-3 mt-3 font-geist'>
                   <div className='wrapper flex gap-2'>
                   <div className='flex gap-2 '>
                   <Image
                        src={icon2}
                        alt='icon'
                        className='w-[25px] h-[25px]'/>
                       
                        <div className='text-[16px] leading-[20px] sm:text-[14px]'> 20<sup className='text-[12px] leading-[14px]'>cm</sup></div>
                    </div>
                    <div className='flex gap-2'>
                    <Image
                        src={icon1}
                        alt='icon'
                        className='w-[25px] h-[25px]'/>
                        <div className='text-[16px] leading-[20px] sm:text-[14px]'> 50<sup className='text-[12px] leading-[14px]'>cm</sup></div>
                    </div>
                   </div>
                   <div className='some-data text-[12px] leading-[15px] text-primary sm:text-[8px]'>
                   RÉF : VABGN5
                   </div>
                   </div>
                   <div className='text-[14px] leading-[18px] text-secondary mt-3 font-geist sm:text-[12px]'>
                    <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
                    <p>Réglable en hauteur</p>
                    <p>Appareil à raclette professionnel</p>
                    <p> Boîtier de chauffe horizontal réglable en hauteur</p>
                   </div>
                   <div className='text-[14px] leading-[18px] text-secondary mt-4 font-geist sm:text-[12px]' >
                   <div>220V</div>
                   <div>900W</div>
                   </div>
                 </div>
                 {/* button section */}
                  <div>
                  <div className='button-section h-[70px] flex gap-2 border-t pt-[20px] sm:w-full'>
                    <div className='flex justify-evenly  font-medium items-center text-[16px] leading-[24px] border rounded-md w-[150px] sm:w-1/2 sm:text-[14px]'>
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                    <div className='bg-buttonbg w-[590px] flex items-center justify-center rounded-md'>
                        <div className='uppercase text-white font-bold text-[16px] leading-[21px] sm:text-[14px]'>Ajouter au panier</div>
                    </div>
                   </div>
                  </div>
                </div>
               
            </div>
            {/* lower section */}
            <div className="flex mt-[40px] sm:flex-col">
                <div className='w-1/2 sm:w-full'>
                   <div className='product-name text-[20px] leading-[25px] font-medium p-2 text-primaryText sm:text-[16px]'>
                   Description produit
                   </div>
                   <div className='text-[14px] leading-[18px] mt-5 p-2 w-[700px] text-primary font-geist sm:w-[100%]'>
                   Festi vous propose à la location un/une Jewel - grand couteau/10pc pour votre évenement et ce dès 0,35 € / pièce (HTVA). 
                   Que ce soit pour votre mariage, une fête d anniversaire ou du personnel, ce produit a fait lobjet dune sélection rigoureuse par notre équipe. 
                   Il est en location chez nous sous la référence VAJGC. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite.
                    Vous pourrez trouver tout une série dautre produit à louer de ce type dans la catégorie Art de la Table.
                   </div>
                </div>
                <div className='w-1/2 sm:w-full'>
                    <div className='corousel flex justify-between p-4 text-[16px] leading-[20px] bg-corouselbg items-center uppercase font-medium text-blackText sm:text-[14px] '>
                        <div>
                        Livraisons
                        </div>
                        <div>
                        <Image 
                        src={plus}
                        alt=''
                        className='w-[24px] h-[24px]:'
                        />
                        </div>
                    </div>
                    <div className='corousel flex justify-between p-4 text-[16px] leading-[20px] bg-corouselbg items-center uppercase font-medium text-blackText sm:text-[14px]'>
                        <div>
                        Livraisons
                        </div>
                        <div>
                        <Image 
                        src={plus}
                        alt=''
                        className='w-[24px] h-[24px]:'
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





