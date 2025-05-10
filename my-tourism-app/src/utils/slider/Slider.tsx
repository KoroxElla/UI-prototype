import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../../context/AppContext";

import img1 from "../../Components/Assets/gosforthspa.webp";
import img2 from "../../Components/Assets/threatreroyal.jpg";
import img3 from "../../Components/Assets/jesmonddene.webp";
import img4 from "../../Components/Assets/Baltic.jpg";
import { Pagination } from "swiper/modules";

const Slider = () => {
  const swiperRef = useRef(null);
  const { activeSlideIndex, setActiveSlideIndex } = useContext(MyContext);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlideIndex(currentIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => handleSlideChange(swiper));
    }
  });

  const places = [
    {
      name: "Mandala Wellness Spa & Aesthetic ",
      img: img1,
    },
    {
      name: "Theatre Royal",
      img: img2,
    },
    {
      name: "Jesmond Dene",
      img: img3,
    },
    {
      name: "BALTIC Centre for Contemporary Art",
      img: img4,
    },
  ];

  return (
    <div className="mr-14">
      <Swiper
        slidesPerView={1}
        keyboard={true}
        spaceBetween={-250}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        ref={swiperRef}
        initialSlide={activeSlideIndex}
        className="pl-[90px] pt-6 "
      >
        {places.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative">
              <img src={item.img} alt="" className="object-cover shadow-xl" />
              <div className="mt-[-40px] ml-[10px]"> {item.name} </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
