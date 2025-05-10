import React, { useState, useEffect, useCallback } from "react";
import {
  FiMenu,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiMap,
  FiCalendar,
  FiBookmark,
  FiStar,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AnimatedGuidemoji from "../../Components/avatar/AnimatedGuidemoji";
import { useUser } from "../../context/UserContext";
import CityMap from "../map/CityMap";
import logo from "../Assets/logo.png";

// Import all images for each region
// Quayside images
import quaysideMain from "../../assets/Quayside/quayside.jpeg";
import balticCentre from "../../assets/Quayside/Baltic-centre.jpg";
import gatesheadBridge from "../../assets/Quayside/Gateshead-Bridge.webp";
import highLevelBridge from "../../assets/Quayside/high-level-bridge.jpg";
import swingBridge from "../../assets/Quayside/Swing-Bridge.jpg";
import tyneBridge from "../../assets/Quayside/tyne_bridge.jpeg";
import bessieSurtee from "../../assets/Quayside/bessie_surtee.jpeg";
import guildhall from "../../assets/Quayside/guildhall_newcastle_01-9b1c3f53.jpeg";
import lawcourt from "../../assets/Quayside/lawcourt.jpg";
import sundayMarket from "../../assets/Quayside/sunday_market.jpeg";
import glasshouse from "../../assets/Quayside/the_glasshouse.jpeg";

// Grainger Town images
import graingerTownMain from "../../assets/GraingerTown/grainger_town.webp";
import theatreRoyal from "../../assets/GraingerTown/Grey-Street-Theatre-Royal.jpg";
import graingerStreet from "../../assets/GraingerTown/grainger-street.jpg";
import greyMonument from "../../assets/GraingerTown/grey-monument.jpg";
import biggMarket from "../../assets/GraingerTown/Bigg_market.jpg";
import centralArcade from "../../assets/GraingerTown/central_arcade.jpg";
import assemblyRoom from "../../assets/GraingerTown/Assembly-Room.jpg";
import eldonSquare from "../../assets/GraingerTown/eldon-square-northumberland.jpg";
import graingerMarket from "../../assets/GraingerTown/grainger_market.jpg";
import newcastleCathedral from "../../assets/GraingerTown/Newcastle-cathedral.jpg";
import threatreRoyal from "../../assets/GraingerTown/threatre_royal.jpg";

// Gateshead images
import gatesheadMain from "../../assets/Gateshead/gateshead.jpeg";
import angelNorth from "../../assets/Gateshead/angel-of-the-north.webp";
import metroCentre from "../../assets/Gateshead/metrocentre.webp";
import saltwellPark1 from "../../assets/Gateshead/saltwellpark1.jpeg";
import saltwellPark2 from "../../assets/Gateshead/saltwellpark2.jpeg";
import saltwellPark3 from "../../assets/Gateshead/saltwellpark3.jpeg";
import saltwellPark4 from "../../assets/Gateshead/saltwellpark4.jpeg";
import dunstonStaiths from "../../assets/Gateshead/dunstonstaiths.jpeg";
import shipleyGallery from "../../assets/Gateshead/shipleygallery.jpeg";
import shipleyGallery2 from "../../assets/Gateshead/shipleygallery2.jpeg";
import shipleyGallery3 from "../../assets/Gateshead/shipleygallery3.jpeg";
import angelViewInn1 from "../../assets/Gateshead/angel-view-inn1.jpg";
import angelViewInn2 from "../../assets/Gateshead/angel-view-inn2.jpeg";
import metroCentre1 from "../../assets/Gateshead/metrocentre1.jpeg";
import ravensworthCastle1 from "../../assets/Gateshead/ravensworth-castle1.jpeg";
import ravensworthCastle2 from "../../assets/Gateshead/ravensworth-castle2.jpeg";
import ravensworthCastle3 from "../../assets/Gateshead/ravensworth-castle3.jpeg";
import ravensworthCastle4 from "../../assets/Gateshead/ravensworth-castle4.jpeg";
import stMaryHeritage from "../../assets/Gateshead/st-mary-heritage-centre.jpeg";
import watergateForest1 from "../../assets/Gateshead/watergate-forest-park.jpeg";
import watergateForest2 from "../../assets/Gateshead/watergate-forest-park2.jpeg";
import windyNook from "../../assets/Gateshead/windy-nook.jpeg";

// Ouseburn images
import ouseburnMain from "../../assets/Ouseburn/ouseburn.webp";
import biscuitFactory from "../../assets/Ouseburn/biscuit-factory.jpg";
import cumberlandArms from "../../assets/Ouseburn/cumberland_arms.jpg";
import victoriaTunnel from "../../assets/Ouseburn/victoria-tunnel.jpg";
import sevenStories from "../../assets/Ouseburn/seven-stories.jpg";
import theCluny from "../../assets/Ouseburn/the_cluny.jpg";
import kiln from "../../assets/Ouseburn/KilnSecondaryResizedDC.webp";
import northernPrint from "../../assets/Ouseburn/northern-print.jpg";
import ousebornFarm from "../../assets/Ouseburn/ouseborn-farm.jpg";
import ouseburnValley from "../../assets/Ouseburn/ouseburn-valley.jpg";
import stepneyBank from "../../assets/Ouseburn/Stepney-Bank-Stables.webp";

interface CollageImage {
  image: string;
  name: string;
  isCollage: boolean;
  items?: string[];
}

interface ImageItem {
  type: "single" | "collage";
  items: (string | CollageImage)[];
}

interface Region {
  id: number;
  name: string;
  image: string;
  description: string;
  images: ImageItem;
  facts: string[];
}

const Regions: React.FC = () => {
  const { avatarUrl } = useUser();
  const navigate = useNavigate();

  const createCollageSet = useCallback(
    (images: string[], name: string): CollageImage[] => {
      return images.map((img, index) => ({
        image: img,
        name: `${name} ${index + 1}`,
        isCollage: true,
        items: images, // Include all items for the collage
      }));
    },
    []
  );

  // Complete data for all 4 regions with images and facts
  const allRegions: Region[] = [
    {
      id: 1,
      name: "Quayside",
      image: quaysideMain,
      description: "Beautiful riverside area with bridges and restaurants",
      images: {
        type: "single",
        items: [
          quaysideMain,
          balticCentre,
          gatesheadBridge,
          highLevelBridge,
          swingBridge,
          tyneBridge,
          bessieSurtee,
          guildhall,
          lawcourt,
          sundayMarket,
          glasshouse,
        ],
      },
      facts: [
        "The Quayside is famous for its seven bridges spanning the River Tyne.",
        "The Baltic Centre for Contemporary Art is a must-visit for art lovers.",
        "Gateshead Millennium Bridge is the world's first tilting bridge.",
        "High Level Bridge is one of the oldest bridges across the Tyne.",
        "Swing Bridge pivots to allow ships to pass through.",
        "Tyne Bridge is an iconic symbol of Newcastle.",
        "Bessie Surtees House showcases Newcastle's medieval architecture.",
        "The Guildhall is a historic building dating back to the 15th century.",
        "The Law Courts are an impressive example of Victorian architecture.",
        "The Sunday Market offers local crafts and produce.",
        "The Glasshouse International Centre for Music is a premier music venue.",
      ],
    },
    {
      id: 2,
      name: "Grainger Town",
      image: graingerTownMain,
      description: "Historic heart of Newcastle with Georgian architecture",
      images: {
        type: "single",
        items: [
          graingerTownMain,
          theatreRoyal,
          graingerStreet,
          greyMonument,
          biggMarket,
          centralArcade,
          assemblyRoom,
          eldonSquare,
          graingerMarket,
          newcastleCathedral,
          threatreRoyal,
        ],
      },
      facts: [
        "Grainger Town contains over 450 listed buildings.",
        "Theatre Royal is one of the most prestigious theatres in the UK.",
        "Grainger Street is known for its beautiful Victorian architecture.",
        "Grey's Monument is a famous landmark honoring Earl Grey.",
        "Bigg Market is a historic area known for its nightlife.",
        "Central Arcade is a beautiful shopping arcade from the 19th century.",
        "The Assembly Rooms are a fine example of Georgian architecture.",
        "Eldon Square is a major shopping center in the city center.",
        "Grainger Market is a historic covered market with diverse vendors.",
        "Newcastle Cathedral has stood at the heart of the city for 900 years.",
        "The Theatre Royal hosts world-class performances year-round.",
      ],
    },
    {
      id: 3,
      name: "Gateshead",
      image: gatesheadMain,
      description: "Vibrant area across the river with cultural attractions",
      images: {
        type: "collage",
        items: [
          // Individual images
          angelNorth,
          metroCentre,
          dunstonStaiths,
          shipleyGallery,
          angelViewInn1,
          metroCentre1,
          stMaryHeritage,
          windyNook,
          // Collage sets
          ...createCollageSet(
            [saltwellPark1, saltwellPark2, saltwellPark3, saltwellPark4],
            "Saltwell Park"
          ),
          ...createCollageSet(
            [shipleyGallery, shipleyGallery2, shipleyGallery3],
            "Shipley Gallery"
          ),
          ...createCollageSet([angelViewInn1, angelViewInn2], "Angel View Inn"),
          ...createCollageSet(
            [
              ravensworthCastle1,
              ravensworthCastle2,
              ravensworthCastle3,
              ravensworthCastle4,
            ],
            "Ravensworth Castle"
          ),
          ...createCollageSet(
            [watergateForest1, watergateForest2],
            "Watergate Forest Park"
          ),
        ],
      },
      facts: [
        "Gateshead is home to the iconic Angel of the North sculpture.",
        "The Angel of the North is 20 meters tall with a 54 meter wingspan.",
        "MetroCentre is one of the largest shopping centers in Europe.",
        "Saltwell Park is a beautiful Victorian park with a restored mansion.",
        "Dunston Staiths is a historic wooden structure used for coal shipping.",
        "Shipley Art Gallery houses an impressive collection of contemporary crafts.",
        "Angel View Inn offers stunning views of the Angel of the North.",
        "MetroCentre has over 300 shops and restaurants.",
        "St Mary's Heritage Centre showcases Gateshead's history.",
        "Windy Nook offers panoramic views of the surrounding area.",
        "Ravensworth Castle is a historic ruin with beautiful grounds.",
        "Watergate Forest Park is a great place for walking and cycling.",
      ],
    },
    {
      id: 4,
      name: "Ouseburn",
      image: ouseburnMain,
      description: "Creative quarter with arts venues and music scene",
      images: {
        type: "single",
        items: [
          ouseburnMain,
          biscuitFactory,
          cumberlandArms,
          victoriaTunnel,
          sevenStories,
          theCluny,
          kiln,
          northernPrint,
          ousebornFarm,
          ouseburnValley,
          stepneyBank,
        ],
      },
      facts: [
        "Ouseburn is known as Newcastle's cultural and creative quarter.",
        "The Biscuit Factory is the UK's largest independent commercial art gallery.",
        "Cumberland Arms is a popular pub with great views of the valley.",
        "Victoria Tunnel is a preserved 19th century wagonway under the city.",
        "Seven Stories is the National Centre for Children's Books.",
        "The Cluny is one of Newcastle's best live music venues.",
        "The Kiln is a creative workspace for artists and makers.",
        "Northern Print is a center for printmaking and exhibitions.",
        "Ouseburn Farm is a city farm with animals and gardens.",
        "Ouseburn Valley has a rich industrial heritage.",
        "Stepney Bank Stables offers horse riding in the city center.",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const regionsPerSlide = 4;
  const totalSlides = Math.ceil(allRegions.length / regionsPerSlide);

  // Get regions for current slide
  const visibleRegions = allRegions.slice(
    currentSlide * regionsPerSlide,
    (currentSlide + 1) * regionsPerSlide
  );

  const nextSlide = () => {
    setIsSpeaking(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  const prevSlide = () => {
    setIsSpeaking(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
    setCurrentImageIndex(0);
    setIsSpeaking(true);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  const closeModal = () => {
    setSelectedRegion(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedRegion?.images.items) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedRegion.images.items.length
      );
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3000);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedRegion?.images.items) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedRegion.images.items.length) %
          selectedRegion.images.items.length
      );
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3000);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedRegion) {
        if (e.key === "ArrowRight") {
          nextImage(e as any);
        } else if (e.key === "ArrowLeft") {
          prevImage(e as any);
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedRegion, currentImageIndex]);

  // Render image display based on type
  const renderImageDisplay = () => {
    if (!selectedRegion) return null;

    const currentItem = selectedRegion.images.items[currentImageIndex];

    if (typeof currentItem === "string") {
      // Render single image
      return (
        <img
          src={currentItem}
          alt={selectedRegion.name}
          className="w-full h-64 md:h-96 object-contain rounded-lg"
        />
      );
    } else if (currentItem.isCollage && currentItem.items) {
      // Render collage view
      return (
        <div className="grid grid-cols-2 gap-2 h-64 md:h-96">
          {currentItem.items.map((img, idx) => (
            <div key={idx} className="relative">
              <img
                src={img}
                alt={`${selectedRegion.name} ${idx + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      );
    } else {
      // Fallback for other cases
      return (
        <img
          src={
            typeof currentItem === "string" ? currentItem : currentItem.image
          }
          alt={selectedRegion.name}
          className="w-full h-64 md:h-96 object-contain rounded-lg"
        />
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-[#0a2b32]">
        <button
          onClick={() => window.history.back()}
          className="p-2 rounded-full hover:bg-[#123a43]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <a href="" className="ml-[-80px]">
          <img src={logo} alt="" />
        </a>
        <h1 className="text-3xl font-bold">Regions in Newcastle</h1>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-[#0a2b32] flex items-center justify-center">
            <FiUser className="text-xl" />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#0a2b32] flex items-center justify-center"
            >
              <FiMenu className="text-xl" />
            </button>
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
      <main className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between mb-12">
        {/* Map Section */}
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <div className="bg-blue-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <CityMap />
          </div>
        </div>

        {/* Avatar Section */}
        <div className="w-32 h-32 flex-shrink-0 mx-4">
          <AnimatedGuidemoji avatarUrl={avatarUrl} isSpeaking={isSpeaking} />
        </div>

        {/* Regions Section */}
        <div className="w-full md:w-2/5 relative mb-12">
          <h2 className="text-xl font-semibold mb-4">Explore Regions</h2>
          <div className="relative">
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            <div className="grid grid-cols-2 gap-4">
              {visibleRegions.map((region) => (
                <div
                  key={region.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleRegionClick(region)}
                >
                  <div className="h-32 bg-gray-300 relative">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">{region.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {region.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Quick Access Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
        <div className="flex justify-around">
          <button
            className="flex flex-col items-center text-sm font-medium"
            onClick={() => navigate("/restaurants")}
          >
            <span>🍽️</span>
            <span>Restaurants</span>
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
      </footer>

      {/* Region Details Modal */}
      {selectedRegion && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold">
                {selectedRegion.name}'s Landmarks and Attractions
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              {/* Image Display */}
              <div className="relative mb-4 flex justify-center">
                {renderImageDisplay()}

                {/* Navigation Arrows */}
                {selectedRegion.images.items.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    >
                      <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedRegion.images.items.length}
                </div>
              </div>

              {/* Avatar and Fact Section */}
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <AnimatedGuidemoji
                    avatarUrl={avatarUrl}
                    isSpeaking={isSpeaking}
                  />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex-1">
                  <p className="text-gray-800">
                    {selectedRegion.facts[currentImageIndex]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Regions;
