import "./MostAttractive.css";
import img1 from "../Assets/1781tyne.jpg";
import img2 from "../Assets/AngelOfTheNorth.webp";
import img3 from "../Assets/potteryexperience.png";

import img4 from "../Assets/Grey's_Momument.jpg";
import img5 from "../Assets/Newcastlecastle.jpg";
import img6 from "../Assets/StMary.jpg";
import img7 from "../Assets/StNicholas.jpg";

import img8 from "../Assets/TheGlasshouse.jpg";
import img9 from "../Assets/Tyne_Bridge.jpg";
import img10 from "../Assets/sevenstories.jpg";

import img11 from "../Assets/gatesheadbridge.jpg";
import img12 from "../Assets/kiln.jpeg";
import img13 from "../Assets/milecastle.jpeg";
import img14 from "../Assets/Thecluny.jpg";
import img15 from "../Assets/mansionhouse.jpeg";

import img16 from "../Assets/paddyfreeman.jpeg";
import img17 from "../Assets/stgeorge.jpeg";
import img18 from "../Assets/jesmondfoodmarket.jpg";

import img19 from "../Assets/gosforthreserve.jpg";
import img20 from "../Assets/gosforthpark.jpg";

import bgleft from "../Assets/bgleft.png";

import { BsHexagonFill } from "react-icons/bs";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/AppContext";
import AOS from "aos";
import BookTour from "../../utils/slider/BookTour";

const MostAttractive = () => {
  const activeSlideIndex = useContext(MyContext) as number;

  useEffect(() => {
    AOS.init();
  }, []);

  const datas = [
    {
      name: "Quayside & Ouseborn",
      leftImg1: img9,
      leftImg2: img12,
      leftImg3: img10,
      rightImg1: img14,
      rightImg2: img1,
      fact1:
        "The Millennium Bridge tilts like a blinking eye for river traffic.",
      fact2:
        "Sunday Quayside Market sells handmade gifts and world street food.",
      fact3:
        "The Ouseburn Valley is Newcastle’s creative quarter with studios and pubs.",
      fact4: " Seven Stories is the UK’s national centre for children’s books.",
      fact5:
        "Victoria Tunnel runs under Ouseburn and was once a WWII air raid shelter.",
    },
    {
      name: "Gosforth & Gateshead",
      leftImg1: img2,
      leftImg2: img11,
      leftImg3: img8,
      rightImg1: img19,
      rightImg2: img20,
      fact1: "Saltwell Park in Gateshead is nicknamed “The People’s Park.”",
      fact2:
        "Gosforth has a hidden Victorian cemetery turned quiet nature spot.",
      fact3: "Gateshead is home to the massive Angel of the North statue.",
      fact4: "Regent Centre in Gosforth was once a wartime military hub.",
      fact5:
        "The Baltic in Gateshead used to be a flour mill before becoming an art gallery.",
    },
    {
      name: "Jesmond",
      leftImg1: img3,
      leftImg2: img15,
      leftImg3: img16,
      rightImg1: img17,
      rightImg2: img18,
      fact1: "Jesmond Dene was landscaped by Lord Armstrong in the 1800s.",
      fact2:
        "Osborne Road is known for its trendy hotel bars and brunch spots.",
      fact3:
        "The Mansion House in Jesmond is the official residence of the Lord Mayor.",
      fact4:
        "Jesmond Pool was saved by locals and now runs as a community charity.",
      fact5:
        "The Cradlewell was once part of a Roman road route into Newcastle.",
    },
    {
      name: "Grainger Town",
      leftImg1: img5,
      leftImg2: img6,
      leftImg3: img7,
      rightImg1: img13,
      rightImg2: img4,
      fact1:
        "Grey Street was called “the finest street in England” by Nikolaus Pevsner.",
      fact2:
        "Central Arcade still has its original Edwardian tiles and glass roof.",
      fact3:
        "Grainger Market sells everything from fresh fish to vintage clothes.",
      fact4: "Theatre Royal’s façade survived a major 1980s renovation.",
      fact5:
        "There are hidden Roman ruins underneath some shops in Grainger Town.",
    },
  ];

  const handleChange = (index: number) => {
    switch (index) {
      case 0:
        return datas[1];
      case 1:
        return datas[3];
      case 2:
        return datas[2];
      case 3:
        return datas[0];
      default:
        return datas[1];
    }
  };

  const infos = handleChange(activeSlideIndex);

  return (
    <section
      className="bg-[#001E23] pt-[120px]  pb-[250px] w-full overflow-hidden"
      id="most"
    >
      <div className="text-center">
        <h2
          className="text-[#8B3A3A] text-[76px]"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          Why you should visit?
        </h2>
        <h2 className="text-[54px] text-white font-Montserrat font-[500] leading-[50px]">
          Most Attractive Places <br /> in {infos.name}
        </h2>
      </div>
      <section className="flex justify-center mt-10 relative">
        <div className="bg-white w-[1px] h-[750px] flex flex-col justify-around items-center">
          <div className="relative items-center flex">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#D7BFAE]" />
            <p className="absolute w-[400px] left-[70px] text-white text-[12px]">
              {infos.fact1}
            </p>
          </div>

          <div className="relative items-center flex">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#D7BFAE]" />
            <p className="absolute w-[400px] left-[70px] text-white text-[12px]">
              {infos.fact2}
            </p>
          </div>

          <img
            src={infos.leftImg1}
            alt="Diamond Image"
            className=" absolute top-[-140px] left-[20px] w-[450px] h-[450px] object-cover [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <img
            src={infos.leftImg2}
            alt="Diamond Image"
            className=" absolute top-[9%] left-[30%] w-[250px] h-[250px] object-cover [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1500"
          />

          <div className="relative items-center flex">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#D7BFAE]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right text-[12px]">
              {infos.fact3}
            </p>
          </div>

          <div className="relative items-center flex">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#D7BFAE]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right text-[12px]">
              {infos.fact4}
            </p>
          </div>

          <img
            src={infos.rightImg1}
            alt="Diamond Image"
            className=" absolute bottom-[190px] right-[19px] w-[350px] h-[350px] object-cover [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <img
            src={infos.rightImg2}
            alt="Diamond Image"
            className=" absolute top-[45%] right-[30%] w-[250px] h-[250px] object-cover [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1500"
          />

          <div className="relative items-center flex">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#D7BFAE]" />
            <p className="absolute w-[400px] left-[70px] text-white text-[12px]">
              {infos.fact5}
            </p>
          </div>

          <img
            src={infos.leftImg3}
            alt="Diamond Image"
            className=" absolute bottom-[-7%] left-[30%] w-[200px] h-[200px] object-cover [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />
          <img
            src={bgleft}
            alt=""
            className="absolute top-[78%] left-[-120px] w-[430px] h-[430px]"
          />
          <img
            src={bgleft}
            alt=""
            className="absolute top-[105%] right-[-25px] w-[360px] h-[360px]"
          />
        </div>
      </section>
      <BookTour className="justify-center mt-[60px]" />
    </section>
  );
};

export default MostAttractive;
