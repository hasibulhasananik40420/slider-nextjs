"use client"

import Image from "next/image"
import SlideItem from "./SlideItem"


const SliderTwo = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,


  }

  return (
    <div className="max-w-[1320px] mx-auto px-3 pt-20 pb-16">

        <div className="lg:flex justify-between">

            <div className="lg:w-[600px] w-full">
               <Image className="w-full" src={'https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais'} alt="" width={600} height={400}/>
            </div>

             <div className="lg:w-[600px] w-full mt-10 md:mt-10 lg:mt-0">

              <SlideItem/>
             </div>

        </div>
        
    </div>
  )
}

export default SliderTwo