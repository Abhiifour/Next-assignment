import heartIcon from '@/resource/Vector.png'
import Image from 'next/image'
import tableSvg from '@/resource/tablesvg.png'



export function ProductCard(props : {width : string}){
    return (
        <div className="main  w-[330px] h-[430px] sm:h-auto" style={{ width: `${props.width}px` }}>
            {/* Image section of the Product card */}
            <div className="box w-full bg-cardbg  p-3 h-[350px] rounded-lg sm:w-full sm:h-[250px]"  >
                <div className='top-section flex justify-between items-center '>
                    <Image 
                    src={heartIcon}
                    className='w-[30px] h-[30px] sm:w-[25px] sm:h-[25px]'
                    alt='hearticon'
                    />
                    <div className="box text-center bg-white rounded-md uppercase text-[10px] leading-[15px] px-3 py-1 text-primaryText font-medium">
                        Art de la table
                    </div>
                </div>
                <div className='image-section w-[220px] h-[220px] m-auto sm:w-[160px] sm:h-[160px]'>
                    <Image
                    src={tableSvg}
                    alt='image-product'
                    className='w-[220px] h-[220px] sm:w-[160px] sm:h-[160px]'
                    />

                </div>

            </div>
            {/* Product Details - title , price . */}
            <div className='title-price flex justify-between items-center px-3 pt-4 pb-2 sm:pt-2 '>
                <div className='text-[24px] leading-[30px] text-blackText font-playfair'>Title</div>
                <div className='text-[24px] leading-[30px] text-blackText font-geist font-medium'>0<sup className='font-normal'>€</sup></div>
            </div>
            <div className='price flex justify-between items-center px-3'>
                <div className='text-[14px] leading-[18px] font-geist text-primary'>0,35€/Pièce ·<span className='text-[10px] leading-[12px]'> RÉF : VABGN5</span></div>
                <div className='bg-quantitybg rounded-xl text-center px-2 py-1 text-quantityText text-[11px] leading-[13px] font-geist'>20 pièces</div>
            </div>
        </div>
    )
}