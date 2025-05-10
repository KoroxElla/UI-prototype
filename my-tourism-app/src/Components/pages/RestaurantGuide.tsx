import React, { useState } from "react";
import { restaurantImages } from "../../assets/images";
import {
  FiMenu,
  FiUser,
  FiMap,
  FiCalendar,
  FiBookmark,
  FiStar,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import AnimatedGuidemoji from "../../Components/avatar/AnimatedGuidemoji";
import logo from "../Assets/logo.png";

interface Restaurant {
  id: number;
  name: string;
  image: keyof typeof restaurantImages;
  cuisine: string;
  description: string;
  priceRange: string;
  dietary: string[];
  preconditions: string[];
  socialMedia: string[];
  funFact: string;
}

interface ActiveFilters {
  dietary: string[];
  price: string[];
  cuisine: string[];
  preconditions: string[];
}

const RestaurantGuide: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    dietary: [],
    price: [],
    cuisine: [],
    preconditions: [],
  });
  const { avatarUrl } = useUser();
  const navigate = useNavigate();

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Aneesa's Buffet Restaurant",
      image: "Aneesas",
      cuisine: "International buffet",
      description:
        "All-you-can-eat self-service buffet offering global cuisines",
      priceRange: "£15–£25",
      dietary: ["Vegetarian", "Vegan", "Halal", "Gluten-free"],
      preconditions: ["Family-friendly", "Wheelchair accessible"],
      socialMedia: ["Facebook", "Twitter"],
      funFact: "Features a Sunday Carvery alongside the buffet",
    },
    {
      id: 2,
      name: "Fat Hippo Underground",
      image: "FatHippoUnderground",
      cuisine: "Gourmet burgers and sides",
      description:
        "Located in a Grade II listed old bank vault, offering a unique dining atmosphere",
      priceRange: "£10–£20",
      dietary: ["Vegetarian", "Gluten-free options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Instagram", "Twitter"],
      funFact: "Known for its indulgent burgers and quirky interior",
    },
    {
      id: 3,
      name: "Kafeneon",
      image: "Kafeneon",
      cuisine: "Greek and Mediterranean",
      description:
        "Family-run taverna-style restaurant serving traditional Greek dishes since 1998",
      priceRange: "£10–£20",
      dietary: ["Vegetarian", "Vegan", "Gluten-free options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook", "Instagram"],
      funFact: "It is located in Newcastle's Bigg Market area",
    },
    {
      id: 4,
      name: "Prima Restaurant",
      image: "PrimaRestaurant",
      cuisine: "Italian",
      description:
        "One of Newcastle's largest Italian restaurants, serving classic dishes in a spacious setting",
      priceRange: "£10–£25",
      dietary: ["Vegetarian", "Gluten-free options"],
      preconditions: ["Wheelchair accessible"],
      socialMedia: ["Facebook", "Instagram"],
      funFact:
        "That restaurant is a fixture on Newcastle's Quayside for two decades",
    },
    {
      id: 5,
      name: "Solstice by Kenny Atkinson",
      image: "Solstice",
      cuisine: "Modern British fine dining",
      description:
        "Offers an 18-course tasting menu in an intimate setting with only 14 seats",
      priceRange: "£120–£150",
      dietary: ["Accommodations upon request"],
      preconditions: [],
      socialMedia: ["Instagram", "Twitter"],
      funFact:
        "Chef Kenny Atkinson also owns the Michelin-starred House of Tides",
    },
    {
      id: 6,
      name: "The French Quarter",
      image: "TheFrenchQuater",
      cuisine: "French",
      description:
        "Relaxed neighborhood restaurant and wine bar offering traditional French dishes",
      priceRange: "£20–£40",
      dietary: ["Vegetarian", "Gluten-free options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook", "Instagram"],
      funFact:
        "Challenges the perception that French dining is formal or fussy",
    },
    {
      id: 7,
      name: "Blackfriars Restaurant",
      image: "BlackfriairsRestaurant",
      cuisine: "British",
      description:
        "Located in a 13th-century former friary, offering a historic dining experience",
      priceRange: "£25–£45",
      dietary: ["Vegetarian", "Vegan", "Gluten-free options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook", "Instagram"],
      funFact: "It is believed to be the oldest dining room in the UK",
    },
    {
      id: 8,
      name: "Geisha Asia Restaurant",
      image: "GeishaAsiaRestaurant",
      cuisine: "Pan-Asian (Japanese, Chinese, Korean)",
      description:
        "Modern Japanese-inspired restaurant offering sushi, dim sum, and other Pan-Asian dishes",
      priceRange: "£15–£30",
      dietary: ["Vegetarian", "Vegan", "Gluten-free options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook", "Instagram"],
      funFact:
        "Considered one of the most Instagrammable restaurants in Newcastle",
    },
    {
      id: 9,
      name: "Pani's Café",
      image: "PanisCafe",
      cuisine: "Italian/Sardinian",
      description:
        "Family-run café serving traditional Sardinian dishes since 1995",
      priceRange: "£10–£20",
      dietary: ["Vegetarian", "Gluten-free options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook", "Instagram"],
      funFact: "First true Italian/Sardinian café in Newcastle",
    },
    {
      id: 10,
      name: "Rio Brazilian Steakhouse",
      image: "RioBrazilianSteakhouse",
      cuisine: "Brazilian Churrasco",
      description:
        "Offers a traditional Rodizio dining experience with continuous tableside meat service",
      priceRange: "£30–£45",
      dietary: ["Vegetarian options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook", "Instagram"],
      funFact: "Decor inspired by the Tijuca Urban Forest in Rio de Janeiro",
    },
    {
      id: 11,
      name: "The Alchemist",
      image: "TheAlchemist",
      cuisine: "International with a focus on creative cocktails",
      description:
        "Known for molecular mixology and a menu of classic dishes with a twist",
      priceRange: "£20–£40",
      dietary: ["Vegetarian", "Vegan", "Gluten-free options"],
      preconditions: ["Family-friendly", "Wheelchair accessible"],
      socialMedia: ["Facebook", "Instagram"],
      funFact: "Features theatrical presentation of food and drinks",
    },
    {
      id: 12,
      name: "Umai Mi Oriental Kitchen",
      image: "UmaiMiOrientalKitchen",
      cuisine: "Pan-Asian",
      description:
        "Fusion of traditional and modern Pan-Asian dishes, offering a variety of drinks including sake",
      priceRange: "£15–£30",
      dietary: ["Vegetarian", "Vegan options"],
      preconditions: ["Wheelchair accessible"],
      socialMedia: ["Facebook", "Instagram"],
      funFact: 'Name means "delicious taste" in Japanese',
    },
    {
      id: 13,
      name: "Dabbawal",
      image: "Dabbawal",
      cuisine: "Indian street food",
      description:
        "Pioneers of Indian street food in the Northeast, offering fast, fresh, and delicious dishes",
      priceRange: "£10–£20",
      dietary: ["Vegetarian", "Vegan", "Halal", "Gluten-free options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook", "Instagram"],
      funFact: "Inspired by dabbawalas of Mumbai",
    },
    {
      id: 14,
      name: "House of Tides",
      image: "HouseofTides",
      cuisine: "Modern British fine dining",
      description:
        "Michelin-starred restaurant offering innovative tasting menus",
      priceRange: "£120–£150",
      dietary: ["Vegetarian options"],
      preconditions: [],
      socialMedia: ["Facebook", "Instagram"],
      funFact:
        "House of Tides is situated in a beautifully restored Grade I listed 16th-century former merchant's townhouse on Newcastle's historic Quayside.",
    },
    {
      id: 15,
      name: "Pitcher & Piano Newcastle",
      image: "PitcherPiano",
      cuisine: "Modern British gastropub",
      description:
        "Stylish bar and restaurant located on Newcastle's Quayside with scenic views of the River Tyne",
      priceRange: "£10–£25",
      dietary: ["Vegetarian", "Vegan", "Gluten-free options"],
      preconditions: [
        "Family-friendly",
        "Wheelchair accessible",
        "Dog-friendly",
      ],
      socialMedia: ["Website"],
      funFact:
        "Features a mezzanine floor with a private heated terrace, ideal for events and gatherings",
    },
    {
      id: 16,
      name: "Saray Jesmond Turkish Grill House",
      image: "SarayJesmond",
      cuisine: "Turkish",
      description:
        "Authentic Turkish grill house offering a variety of traditional dishes",
      priceRange: "£15–£30",
      dietary: ["Vegetarian options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Facebook"],
      funFact: " Known for its charcoal-grilled meats and generous portions.",
    },
    {
      id: 17,
      name: "The Broad Chare",
      image: "TheBroadChare",
      cuisine: "Traditional British",
      description:
        "A 'proper' pub in a converted warehouse by the quay, offering hearty, punchily flavoured dishes",
      priceRange: "£15–£30",
      dietary: ["Vegetarian options"],
      preconditions: ["Family-friendly"],
      socialMedia: ["Website"],
      funFact:
        "Awarded the Bib Gourmand by the Michelin Guide for good quality, good value cooking.",
    },
    {
      id: 18,
      name: "Victors Newcastle",
      image: "Victors",
      cuisine: "Modern American-Asian fusion",
      description:
        "Upscale yet informal restaurant featuring sushi, small plates, and larger dishes",
      priceRange: "£20–£45",
      dietary: ["Vegetarian", "Vegan", "Gluten-free options"],
      preconditions: ["Family-friendly", "Wheelchair accessible"],
      socialMedia: ["Website", "Instagram"],
      funFact:
        "Winner of 'The Best Restaurant in Newcastle 2023' at The British Restaurant Awards",
    },
  ];

  const toggleFilter = (category: keyof ActiveFilters, value: string) => {
    setActiveFilters((prev) => {
      const currentFilters = [...prev[category]];
      const index = currentFilters.indexOf(value);

      if (index === -1) {
        currentFilters.push(value);
      } else {
        currentFilters.splice(index, 1);
      }

      return { ...prev, [category]: currentFilters };
    });
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    // Search filter
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Dietary filter
    const matchesDietary =
      activeFilters.dietary.length === 0 ||
      activeFilters.dietary.some((filter) =>
        restaurant.dietary.some((d) =>
          d.toLowerCase().includes(filter.toLowerCase())
        )
      );

    // Price filter
    const matchesPrice =
      activeFilters.price.length === 0 ||
      activeFilters.price.some((price) =>
        restaurant.priceRange.includes(price)
      );

    // Cuisine filter
    const matchesCuisine =
      activeFilters.cuisine.length === 0 ||
      activeFilters.cuisine.some((cuisine) =>
        restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      );

    // Preconditions filter
    const matchesPreconditions =
      activeFilters.preconditions.length === 0 ||
      activeFilters.preconditions.some((condition) =>
        restaurant.preconditions.some((p) =>
          p.toLowerCase().includes(condition.toLowerCase())
        )
      );

    return (
      matchesSearch &&
      matchesDietary &&
      matchesPrice &&
      matchesCuisine &&
      matchesPreconditions
    );
  });

  // Extract all unique filter options
  const allDietary = Array.from(
    new Set(restaurants.flatMap((r) => r.dietary))
  ).filter(Boolean);
  const allCuisines = Array.from(
    new Set(restaurants.map((r) => r.cuisine.split(" ")[0]))
  );
  const allPreconditions = Array.from(
    new Set(restaurants.flatMap((r) => r.preconditions))
  ).filter(Boolean);
  const priceRanges = [
    "£10–£20",
    "£15–£25",
    "£20–£40",
    "£25–£45",
    "£30–£45",
    "£120–£150",
  ];

  // Implement the filter menu
  const renderFilterMenu = () => (
    <div className="bg-[#0a2b32] p-4 rounded-lg mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Dietary</h3>
          {allDietary.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={activeFilters.dietary.includes(option)}
                onChange={() => toggleFilter("dietary", option)}
                className="rounded text-blue-500"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          {priceRanges.map((price) => (
            <label key={price} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={activeFilters.price.includes(price)}
                onChange={() => toggleFilter("price", price)}
                className="rounded text-blue-500"
              />
              <span>{price}</span>
            </label>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Cuisine</h3>
          {allCuisines.map((cuisine) => (
            <label key={cuisine} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={activeFilters.cuisine.includes(cuisine)}
                onChange={() => toggleFilter("cuisine", cuisine)}
                className="rounded text-blue-500"
              />
              <span>{cuisine}</span>
            </label>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Accessibility</h3>
          {allPreconditions.map((condition) => (
            <label key={condition} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={activeFilters.preconditions.includes(condition)}
                onChange={() => toggleFilter("preconditions", condition)}
                className="rounded text-blue-500"
              />
              <span>{condition}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 border-b border-[#0a2b32]">
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
        <h1 className="text-2xl font-bold">Restaurants in Newcastle</h1>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#0a2b32] flex items-center justify-center">
            <FiUser className="text-lg" />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 rounded-full bg-[#0a2b32] flex items-center justify-center"
            >
              <FiMenu className="text-lg" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0a2b32] rounded-md shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 hover:bg-[#123a43]">
                  <FiBookmark className="inline mr-2" /> Itinerary
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#123a43]">
                  <FiStar className="inline mr-2" /> Memory Lane
                </a>
                <a
                  href="/explore"
                  className="block px-4 py-2 hover:bg-[#123a43]"
                >
                  <FiMap className="inline mr-2" /> Map
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#123a43]">
                  <FiCalendar className="inline mr-2" /> Calendar
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Left Column - Avatar and Info */}
        <div className="lg:w-1/4 flex flex-col gap-4">
          {/* Avatar Section */}
          <div className="bg-[#0a2b32] p-4 rounded-lg flex flex-col items-center">
            <AnimatedGuidemoji
              avatarUrl={avatarUrl}
              isSpeaking={false} // Set to true when speaking
            />
            <p className="text-center text-sm mb-3">Your Guidemoji</p>

            {/* Fun Fact Bubble */}
            {selectedRestaurant && (
              <div className="bg-[#123a43] p-3 rounded-lg text-sm">
                <p className="font-semibold">Did you know?</p>
                <p>{selectedRestaurant.funFact}</p>
              </div>
            )}
          </div>

          {/* Restaurants List */}
          <div className="bg-[#0a2b32] p-4 rounded-lg flex-1 mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Restaurants</h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-1 bg-[#123a43] rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className={`p-3 rounded-lg cursor-pointer ${
                    selectedRestaurant?.id === restaurant.id
                      ? "bg-[#2a7a8c]"
                      : "bg-[#123a43] hover:bg-[#1a4a53]"
                  }`}
                  onClick={() => setSelectedRestaurant(restaurant)}
                >
                  <h3 className="font-medium">{restaurant.name}</h3>
                  <p className="text-xs text-gray-400">{restaurant.cuisine}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Restaurant Details */}
        <div className="lg:w-3/4 bg-[#0a2b32] p-4 rounded-lg mb-12">
          {showFilters && renderFilterMenu()}
          {selectedRestaurant ? (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src={restaurantImages[selectedRestaurant.image]}
                  alt={selectedRestaurant.name}
                  className="w-[300px] h-[400px] object-cover rounded-lg"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedRestaurant.dietary.map((diet) => (
                    <span
                      key={diet}
                      className="text-xs bg-[#123a43] px-2 py-1 rounded"
                    >
                      {diet}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <p className="font-semibold">Accessibility:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedRestaurant.preconditions.length > 0 ? (
                      selectedRestaurant.preconditions.map((cond) => (
                        <span
                          key={cond}
                          className="text-xs bg-[#2a7a8c] px-2 py-1 rounded"
                        >
                          {cond}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400">
                        Not specified
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold">
                  {selectedRestaurant.name}
                </h2>
                <p className="text-[#2a7a8c] text-lg">
                  {selectedRestaurant.priceRange}
                </p>
                <p className="mt-2">{selectedRestaurant.description}</p>

                <div className="mt-4">
                  <h3 className="font-semibold">Social Media:</h3>
                  <div className="flex gap-2 mt-1">
                    {selectedRestaurant.socialMedia.map((platform) => (
                      <span
                        key={platform}
                        className="text-xs bg-[#123a43] px-2 py-1 rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-gray-400">
              <p>Select a restaurant to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Explore Nearby Section (Bottom Left) */}
      <div className="fixed bottom-16 right-4 w-1/4 max-w-xs bg-teal-500 p-3 rounded-lg shadow-2xl z-10">
        <h3 className="text-sm font-semibold mb-2">Explore Nearby</h3>
        <div className="grid grid-cols-2 gap-2">
          {restaurants.slice(0, 4).map((restaurant) => (
            <div
              key={`nearby-${restaurant.id}`}
              className="bg-[#123a43] p-2 rounded text-center text-xs cursor-pointer hover:bg-[#1a4a53]"
              onClick={() => setSelectedRestaurant(restaurant)}
            >
              {restaurant.name}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access Bar (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a2b32] p-3 flex justify-around border-t border-[#123a43]">
        <button
          className="flex flex-col items-center text-xs"
          onClick={() => navigate("/regions")}
        >
          <span className="text-lg mb-1">🏛️</span>
          Landmarks
        </button>
        <button
          className="flex flex-col items-center text-xs"
          onClick={() => navigate("/explore")}
        >
          <span className="text-lg mb-1">🎭</span>
          Explore Map
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
    </div>
  );
};

export default RestaurantGuide;
