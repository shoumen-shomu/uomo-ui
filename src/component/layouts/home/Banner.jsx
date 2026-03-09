import Images from '@/component/common/Images'
import React from 'react'
import bannerRightImg from "@/assets/images/bannerRightImg.png"


const Banner = () => {
    return (
        <>
            <section id="banner">
                <div class="bg-[url('./assets/images/bannerBg.png')] pt-[57px] mx-20 bg-no-repeat bg-cover bg-center">
                    <div className="container">
                        <div className="flex">
                            <div className="leftContent relative">
                               <div className="relative">
                                 <p className='texts_14_medium text-second-red'>NEW TREND</p>
                                 <div className="w-10 h-[2px] bg-second-red absolute top-[10px] -left-13 "></div>
                               </div>

                            </div>
                            <div className="rightContent">
                                <Images imgSrc={bannerRightImg} />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Banner
