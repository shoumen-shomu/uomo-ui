import React from 'react'

const Contact = () => {
  return (
    <div className='px-4 md:px-20 lg:px-0'>
      <h3 className='head_35_bold text-head uppercase ml-[495px] mt-[96px]'>
        Contact Us
      </h3>

      <div className="mt-[32px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3652.1434556075847!2d90.38051569046019!3d23.742263248988838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1773303535456!5m2!1sen!2sbd"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-[930px] mx-auto mt-[50px] ">
      <div className="flex flex-col lg:flex-row gap-x-[198px]">
         <div className="w-[282px]">
         <h4 className='head_26_medium text-head'>Store in London</h4>
        <p className='texts_14_regular text-head pt-[23px]'>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
        <p className='texts_14_regular text-head'>United States</p>
        <p className='texts_14_regular text-head pt-[32px]'>sale@uomo.com</p>
        <p className='texts_14_regular text-head'>+1 246-345-0695</p>
       </div>
       <div className="w-[282px]">
         <h4 className='head_26_medium text-head'>Store in Istanbul</h4>
        <p className='texts_14_regular text-head pt-[23px]'>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
        <p className='texts_14_regular text-head'>United States</p>
        <p className='texts_14_regular text-head pt-[32px]'>sale@uomo.com</p>
        <p className='texts_14_regular text-head'>+1 246-345-0695</p>
       </div>
      </div>
         <form className="space-y-3 lg:space-y-7.5">
          <h4 className='head_26_medium text-head mt-[62px]'>Get In Touch</h4>

            {/* Floating Label Name Input */}
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-1 texts_14_regular text-head">
                Name *
              </label>
              <input
                type="text"
                defaultValue="Ali"
                className="w-full border border-head p-[17px] outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address *"
                className="w-full border border-footer texts_14_regular text-[#767676] p-[17px] outline-none focus:border-head"
              />
            </div>
  {/* Review Textarea */}
            <div>
              <textarea
                placeholder="Your Review"
                className="w-full border border-footer p-[17px] h-[213px] outline-none focus:border-head texts_14_regular text-[#767676"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-head text-white px-10 lg:px-0 texts_14_medium h-12 lg:w-[280px] lg:h-[60px] cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
      </div>
      
     
    </div>
  )
}

export default Contact