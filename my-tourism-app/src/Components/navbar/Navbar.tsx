import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const menus = [
    { title: "Home", url: "home" },
    { title: "Reason", url: "most" },
    { title: "View Point", url: "viewpoint" },
    { title: "Book Now", url: "" },
  ];
  return (
    <nav className="flex justify-between items-center px-[140px] py-5">
      <a href="" className="ml-[-80px]">
        <img src={logo} alt="" />
      </a>
      <div className="bg-[#3A5F78] bg-opacity-[70%] py-3 px-[80px] rounded-[40px] mr-[-100px]">
        <ul className="flex text-white text-[17px] font-bold uppercase gap-[120px]">
          {menus.map((menu, i) => (
            <li key={i}>
              <Link
                to={menu.url}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={500}
                className="hover:border-b-2 border-white transform duration-150 cursor-pointer"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
