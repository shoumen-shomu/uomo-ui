import Images from '@/component/common/Images'
import shopBannerImg from '@/assets/images/shopBannerImg.png'
import React from 'react'
import { Link } from 'react-router-dom'

const ShopBanner = () => {
    return (
        <>
            <section>
                <div className="bg-[url('./assets/images/ShopBannerBg.png')] pt-33.75 mx-15 bg-no-repeat bg-cover bg-center relative">
                    <div className="container">
                        <div className="">
                            <h3 className='font-bold text-[90px] uppercase tracking-wide
               text-[#efefef] bg-transparent
               filter-[drop-shadow(1px_0_0_#8b8282)_drop-shadow(-1px_0_0_#8b8282)_drop-shadow(0_1px_0_#8b8282)_drop-shadow(0_-1px_0_#8b8282)]'>Jackets & Coats</h3>
                        </div>
                        <div className="flex justify-between items-center pt-3.25">
                            <div className="">
                                  <ul className='flex gap-x-8 pb-34.75'>
                                    <li className="texts_16_medium text-head"><Link>#STAYHOME</Link></li>
                                    <li className="texts_16_medium text-head"><Link>NEW IN</Link></li>
                                    <li className="texts_16_medium text-head"><Link>JACKETS</Link></li>
                                    <li className="texts_16_medium text-head relative after:absolute after:content-[''] after:w-[55%] after:h-[2px] after:bg-head after:bottom-[-3px] after:left-[-15px] hover:after:w-full  after:duration-500 after:ease-in-out"><Link>HOODIES</Link></li>
                                    <li className="texts_16_medium text-head"><Link>MEN</Link></li>
                                    <li className="texts_16_medium text-head"><Link>WOMEN</Link></li>
                                    <li className="texts_16_medium text-head"><Link>TROUSERS</Link></li>
                                    <li className="texts_16_medium text-head"><Link>ACCESSORIES</Link></li>
                                    <li className="texts_16_medium text-head"><Link>SHOES</Link></li>
                                  </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopBanner