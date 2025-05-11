import "./ViewPoint.css";
import { BiSolidCalendar } from "react-icons/bi";
import img1 from "../Assets/viewpoint1.jpg";
import img2 from "../Assets/viewpoint2.jpg";
import img3 from "../Assets/viewpoint3.jpg";
import img4 from "../Assets/viewpoint4.jpg";
import img5 from "../Assets/arrow.png";
import { useEffect, useState } from "react";
import BookTour from "../../utils/slider/BookTour";

const ViewPoint = () => {
  const [state, setState] = useState(2);
  const [imgVisible, setImgVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImgVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [state]);

  const data = [
    {
      date: "2/07",
      title: "A Hidden Gem",
      desc: "Found a quiet corner of paradise—nature's perfect escape.",
    },
    {
      date: "2/08",
      title: "Lanterns and Legends",
      desc: "The ghost tour gave me chills—and not just from the night air!",
    },
    {
      date: "2/09",
      title: "Freefall and Freedom",
      desc: "Skydiving over the coast was pure adrenaline and unmatched views.",
    },
    {
      date: "2/10",
      title: "Exploring History's Walls",
      desc: "My visit to the castle was like stepping into a time machine.",
    },
  ];

  const handleSelected = (index: number) => {
    setImgVisible(false);
    setState(index);
  };

  const handleImages = () => {
    switch (state) {
      case 0:
        return img1;
      case 1:
        return img2;
      case 2:
        return img3;
      case 3:
        return img4;
    }
  };

  const ImgSrc = handleImages();

  return (
    <div className="mt-[100px]" id="viewpoint">
      <div className="text-center">
        <h1
          className="text-[#42a8bb] text-[76px]"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          View Point
        </h1>
        <h2 className="text-[54px] text-white font-Montserrat font-[500] leading-[50px]">
          Discover our Tourist <br /> Viewpoint
        </h2>
      </div>

      <div className="flex justify-between items-center mt-[50px]">
        <div className="w-[40%] flex flex-col gap-2 pl-[100px]">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => handleSelected(i)}
              className={`${
                state === i ? "border-[#00A1B9]" : "border-transparent"
              } border-[6px] mr-[-50px] ml-[-100px] pl-[100px] py-2 z-[99] relative h-[120px]`}
            >
              <div className="text-white flex gap-10 h-[90px]">
                <p className="text-[25px] font-semibold">{item.date}</p>
                <div>
                  <h3 className="text-[17px] font-[600]">{item.title}</h3>
                  <p className="mt-2">{item.desc}</p>
                  <div className="flex items-center gap-5 ">
                    <img src={img5} alt="" className="h-1/6 w-1/6" />
                    <button className="font-[600] hover:text-[#00A1B9]">
                      View Route
                    </button>
                  </div>
                </div>
              </div>

              {state === i && (
                <p className="absolute right-0 top-[10%] text-[25px] font-semibold text-white flex items-center gap-1 justify-center verticleText">
                  <BiSolidCalendar />
                  {item.date}
                </p>
              )}
            </div>
          ))}

          <BookTour className="justify-start mt-8" />
        </div>
        <div className="w-[60%] viewPointImg">
          <img
            src={ImgSrc}
            alt=""
            className={`h-[650px] w-full ${imgVisible ? "" : "fade-out"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPoint;
