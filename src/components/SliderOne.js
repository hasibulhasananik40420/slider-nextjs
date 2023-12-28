"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";


const SliderOne = () => {

  const sliderRef = useRef(null);

  const handlePrev = () => {
    console.log("Previous Button Clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  
  const handleNext = () => {
    console.log("Next Button Clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  

  return (
    <Slider className="max-w-[1320px] mx-auto px-3 py-6" ref={sliderRef} {...settings}>
    <div className=" flex flex-col gap-10">


      <div className="lg:flex gap-20">

        {/* card 1 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

       {/* card 2 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg mt-10 md:mt-10 lg:mt-0">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

      </div> 
      
      <div className="flex justify-between items-center py-10">
        <span onClick={handlePrev} className="bg-white w-10 h-10 rounded-full shadow-2xl border flex justify-center items-center hover:bg-orange-500 group duration-300 cursor-pointer">
          <IoIosArrowBack className="text-black text-[18px] group-hover:text-white" />
        </span>

        <span className="h-[1px] border-gray-400 border-b-[1px] w-full"></span>

        <span  onClick={handleNext} className="bg-white w-10 h-10 rounded-full shadow-2xl border flex justify-center items-center hover:bg-orange-600 group duration-300 cursor-pointer">
          <MdOutlineArrowForwardIos className="text-black text-[18px] group-hover:text-white" />
        </span>
      </div>
      
      
      <div className="lg:flex gap-20">

        {/* card 1 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

       {/* card 2 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg mt-10 md:mt-10 lg:mt-0">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

      </div>

      
    </div>




       <div className=" flex flex-col gap-10">


      <div className="lg:flex gap-20">

        {/* card 1 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

       {/* card 2 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg mt-10 md:mt-10 lg:mt-0">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

      </div> 
      
      <div className="flex justify-between items-center py-10">
        <span onClick={handlePrev} className="bg-white w-10 h-10 rounded-full shadow-2xl border flex justify-center items-center hover:bg-orange-500 group duration-300 cursor-pointer">
          <IoIosArrowBack className="text-black text-[18px] group-hover:text-white" />
        </span>

        <span className="h-[1px] border-gray-400 border-b-[1px] w-full"></span>

        <span  onClick={handleNext} className="bg-white w-10 h-10 rounded-full shadow-2xl border flex justify-center items-center hover:bg-orange-600 group duration-300 cursor-pointer">
          <MdOutlineArrowForwardIos className="text-black text-[18px] group-hover:text-white" />
        </span>
      </div>
      
      
      <div className="lg:flex gap-20">

        {/* card 1 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

       {/* card 2 start  */}
        <div className="md:w-[600px] w-full md:h-[280px] h-full md:flex gap-6 justify-center shadow-lg mt-10 md:mt-10 lg:mt-0">
          <div className="relative md:w-[300px] w-full  md:h-[280px]  flex justify-center items-center p-3 bg-slate-200 group">
            <Image
              className="object-cover md:w-[300px] w-full cursor-pointer"
              src={
                "https://img.freepik.com/premium-photo/laptop-computer-with-abstract-background-monitor-high-quality-photo_493343-6292.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              }
              alt=""
              width={300}
              height={280}
            />

            {/* Overlay with icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <FaHeart className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoShareSocial className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
              <span className="w-10 h-10 bg-[#00AEEF] rounded-full flex justify-center items-center">
                <IoSearchOutline className="text-black text-[16px] cursor-pointer hover:text-red-500 duration-300" />
              </span>
            </div>
          </div>

          <div className="md:w-[300px] w-full lg:mt-2 mt-10">
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-yellow-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <h3 className="text-[20px] text-red-600 font-bold mt-3">$1.60</h3>

            <p className="text-[14px] text-[#595959] font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              in accusamus perspiciatis similique alias reiciendis .
            </p>

            <button className="bg-gray-700 text-[16px] text-white font-medium w-[170px] h-[48px] rounded-[60px] uppercase mt-6 hover:bg-black duration-500">
              add to cart
            </button>
          </div>
        </div>

      </div>

      
      </div>



    </Slider>
  );
};

export default SliderOne;
