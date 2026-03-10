import React from 'react'
import Images from '@/component/common/Images'
import allImages from '@/helper/imagesProvider'

const NotFound = () => {
    // for images 
    const {notFoundPage} =  allImages
  return (
    <div className="  flex items-center justify-center h-screen ">
      <Images imgAlt={notFoundPage} imgSrc={notFoundPage} className={"w-[476px] h-[322px]"}  />
    </div>
  )
}

export default NotFound