import { useState, useEffect } from "react";
import CityMap from "../map/CityMap";
import AvatarTutorial from "../pages/AvatarTutorial";
import {
  FiMenu,
  FiUser,
  FiMap,
  FiCalendar,
  FiBookmark,
  FiStar,
} from "react-icons/fi";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import AnimatedGuidemoji from "../../Components/avatar/AnimatedGuidemoji";
import logo from "../Assets/logo.png";

const ExplorePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showAvatar, setShowAvatar] = useState(true);
  const { avatarUrl } = useUser();
  const [pressTimer, setPressTimer] = useState<number | null>(null);
  const navigate = useNavigate();

  // Check if tutorial was disabled
  useEffect(() => {
    const isTutorialDisabled =
      localStorage.getItem("tutorialDisabled") === "true";
    setShowTutorial(!isTutorialDisabled);
  }, []);

  // Long-press handler to toggle avatar
  const startPress = () => {
    setPressTimer(
      setTimeout(() => {
        setShowAvatar(!showAvatar);
      }, 1000) // 1-second long press
    );
  };

  const cancelPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-[#0a2b32]">
        <a href="" className="ml-[-80px]">
          <img src={logo} alt="" />
        </a>
        <h1 className="text-3xl font-bold">Ultimate Newcastle Guide</h1>
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-full bg-[#0a2b32] flex items-center justify-center">
            <FiUser className="text-xl" />
          </div>

          {/* Burger Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#0a2b32] flex items-center justify-center"
            >
              <FiMenu className="text-xl" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0a2b32] rounded-md shadow-lg py-1 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-[#123a43] items-center"
                >
                  <FiBookmark className="mr-2" /> Itinerary
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-[#123a43] items-center"
                >
                  <FiStar className="mr-2" /> Memory Lane
                </a>
                <a
                  href="/explore"
                  className="block px-4 py-2 hover:bg-[#123a43] items-center"
                >
                  <FiMap className="mr-2" /> Map
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-[#123a43] items-center"
                >
                  <FiCalendar className="mr-2" /> Calendar
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-6">Map of Newcastle</h2>

        {/* Avatar + Map Layout */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Avatar Section (conditionally rendered) */}
          {showAvatar && (
            <div className="md:w-1/4 bg-[#0a2b32] p-4 rounded-lg flex flex-col items-center">
              <AnimatedGuidemoji
                avatarUrl={avatarUrl}
                isSpeaking={false} // Set to true when speaking
              />
              <p className="text-center mt-2">Your Guidemoji</p>
            </div>
          )}

          {/* Map Section */}
          <div
            className={`bg-[#0a2b32] p-6 rounded-lg  mb-8 ${
              showAvatar ? "md:w-3/4" : "w-full"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Map of the city</h3>
            <p className="text-gray-400 mb-4">
              It has some location icons on popular places across the different
              districts
            </p>
            <div
              className="h-[400px]"
              onTouchStart={startPress}
              onTouchEnd={cancelPress}
              onMouseDown={startPress}
              onMouseUp={cancelPress}
              onMouseLeave={cancelPress}
            >
              <CityMap />
            </div>
          </div>
        </div>

        {/* Quick Access Bar (Bottom) */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0a2b32] p-4 flex justify-around border-t border-[#123a43]">
          <button
            className="flex flex-col items-center text-sm"
            onClick={() => navigate("/restaurants")}
          >
            <span className="text-lg mb-1">🍽️</span>
            Restaurants
          </button>
          <button
            className="flex flex-col items-center text-sm"
            onClick={() => navigate("/regions")}
          >
            <span className="text-lg mb-1">🏛️</span>
            Landmarks
          </button>
          <button
            className="flex flex-col items-center text-sm"
            onClick={() => navigate("/avatar-customization")}
          >
            <span className="text-lg mb-1">🎨</span>
            Style Guidemoji
          </button>
          <button className="flex flex-col items-center text-sm font-medium">
            <span>🗓️</span>
            <span>Itinerary</span>
          </button>
        </div>
      </main>

      {/* Tutorial Overlay */}
      {showTutorial && (
        <AvatarTutorial
          onFinish={() => setShowTutorial(false)}
          onDisableTutorial={() =>
            localStorage.setItem("tutorialDisabled", "true")
          }
        />
      )}
    </div>
  );
};

export default ExplorePage;
