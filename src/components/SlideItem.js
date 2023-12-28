import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="pb-6" {...settings}>
      <div className="flex flex-col gap-12">
        {/* item 4 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>

        {/* item 2 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>

        {/* item 3 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {/* item 4 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>

        {/* item 2 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>

        {/* item 3 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>
      </div>


  <div className="flex flex-col gap-12">
        {/* item 4 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>

        {/* item 2 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>

        {/* item 3 start here */}
        <div className="flex gap-8">
          <div>
            <Image
              className="md:w-[160px] md:h-[130px] shadow w-14 h-14 "
              src={
                "https://img.freepik.com/premium-photo/3d-render-image-modern-coral-colored-audio-headphones_103577-4670.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              }
              alt=""
              width={140}
              height={100}
            />
          </div>

          <div>
            <span className="flex gap-3 items-center">
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
              <FaStar className="text-[18px] text-gray-400" />
            </span>

            <h1 className="text-[20px] text-[#16243F] font-bold mt-3">
              Lorem ipsum dolor sit amet.
            </h1>

            <span className="flex gap-10 items-center">
              <h3 className="text-[30px] text-red-600 font-bold mt-3">
                $60.00
              </h3>
              <h3 className="text-[20px] text-[#595959] font-normal mt-3 line-through">
                $70.00
              </h3>
            </span>
          </div>
        </div>
      </div>





    </Slider>
  );
};

export default SlideItem;
