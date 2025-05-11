import { useContext } from "react";
import "./header.css";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Slider from "../../utils/slider/Slider";
import { MyContext } from "../../context/AppContext";

const contentData = [
  {
    region: "Gosforth",
    title: "Explore Gosforth",
    description:
      "Gosforth is a vibrant and affluent suburb located just north of Newcastle city centre, known for its leafy streets, excellent schools, and strong sense of community. The area blends residential charm with lively amenities, featuring a bustling high street lined with independent shops, cozy cafés, pubs, and a variety of restaurants. Its green spaces, such as Gosforth Central Park and nearby Town Moor, offer residents and visitors a peaceful retreat within an urban setting. Well-connected by Metro and bus services, Gosforth maintains a suburban feel while offering the convenience of city living.",
  },
  {
    region: "Grainger Town",
    title: "Explore Grainger Town",
    description:
      "Grainger Town is the historic heart of Newcastle upon Tyne, celebrated for its striking 19th-century architecture and elegant Georgian and Victorian streetscapes. Anchored by the iconic Grey Street—once dubbed the most beautiful street in Britain—this area features grand facades, ornate arcades like the Central Arcade, and cultural landmarks including Theatre Royal and Grainger Market. It’s a hub for shopping, dining, and arts, effortlessly combining history with modern urban life. The ambience of Grainger Town makes it a quintessential experience for anyone exploring the soul of Newcastle.",
  },
  {
    region: "Jesmond",
    title: "Explore Jesmond",
    description:
      "Jesmond is a stylish and student-friendly neighborhood nestled just east of Newcastle city centre. Known for its chic boutiques, charming cafés, and trendy bars, it offers a cosmopolitan vibe with a relaxed residential atmosphere. Osborne Road is the social artery of the area, bustling with eateries and nightlife, while Jesmond Dene—a picturesque wooded valley—provides scenic walks and a touch of nature in the heart of the suburb. Popular with students, professionals, and families alike, Jesmond blends academic energy with elegant living.",
  },
  {
    region: "Quayside",
    title: "Explore Quayside",
    description:
      "Quayside is one of Newcastle’s most iconic and visually stunning areas, stretching along the River Tyne with panoramic views of its famous bridges, including the Gateshead Millennium Bridge. Once a bustling industrial dock, it has transformed into a modern waterfront promenade that buzzes with restaurants, bars, galleries, and Sunday markets. With landmarks like the BALTIC Centre for Contemporary Art and the Sage Gateshead just across the river, Quayside is a cultural and culinary hotspot that reflects both the city’s heritage and its forward-looking spirit.Let me know if you'd like shortened versions or additions like fun facts or visitor tips.",
  },
];

const Header = () => {
  const activeSlideIndex = useContext(MyContext) as number;

  const handleClass = (activeSlideIndex: number) => {
    const { region, title, description } = contentData[activeSlideIndex] || {};

    if (region && title) {
      return (
        <div>
          <h1 className="text-[74px] text-[#8B3A3A] font-Montserrat font-[800] leading-[74px] ml-[-60px]">
            Explore <br />
            <span className={"region ${region}"} data-region={region}>
              {region}
            </span>
          </h1>
          <p className="text-[#D7BFAE] ml-[-60px] mt-[0px] p-2 w-[95%] font-semibold text-left ">
            {description}
          </p>
        </div>
      );
    }

    return null;
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <div className="flex items-center mt-[40px]">
      {/* text content*/}
      <div className="w-1/2 pl-[90px]">
        {classChange}

        <div className="mt-[100px] flex gap-12">
          <button className="border-2 border-[#8B3A3A] text-[20px] px-6 py-2 font-semibold text-[#3A5F78] hover:text-[#A44A4A]">
            {" "}
            Book Now
          </button>

          <button className="flex items-center gap-2">
            <FaYoutube className="text-red-700 text-[40px]" />
            <span className="text-[#3A5F78]">Watch Videos like this</span>
          </button>
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-end justify-end relative">
        <div>
          <Slider />
        </div>
        <div className=" flex gap-4 text-xl text-white absolute bottoom-[-60px] right-[100px] ">
          <FaYoutube />
          <FiInstagram />
          <BsWhatsapp />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Header;
