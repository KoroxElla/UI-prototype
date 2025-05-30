import Navbar from "../navbar/Navbar";
import "./Home.css";
import Header from "../header/Header";
import { useContext } from "react";
import { MyContext } from "../../context/AppContext";

const Home = () => {
  const context = useContext(MyContext);
  const { activeSlideIndex } = context;

  const handeClass = (activeSlideIndex: number) => {
    switch (activeSlideIndex) {
      case 0:
        return "bgContainer1";
      case 1:
        return "bgContainer2";
      case 2:
        return "bgContainer3";
      case 3:
        return "bgContainer4";
      default:
        return "bgContainer1";
    }
  };

  const classChange = handeClass(activeSlideIndex);

  return (
    <div className={`${classChange} h-[1080px] overflow-hidden`} id="home">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
