import Container from '@/component/common/Container'
import Images from '@/component/common/Images'
import React from 'react'
import image from "@/assets/images/uomoImg.png"

const Uomo = () => {
    return (
        <>
            <section className='mt-[81px]'>
                <Container>
<div className="">
    <h2 className='head_35_regular text-bold text-center'>@UOMO</h2>
    <div className="mt-8.5 grid grid-cols-6 gap-1">
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
        <Images imgSrc={image} imgAlt={image}/>
    </div>
</div>
                </Container>
            </section>
        </>
    )
}

export default Uomo
