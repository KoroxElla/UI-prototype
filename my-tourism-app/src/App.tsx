import { useState, useEffect } from "react";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Home from "./Components/home/Home";
import MostAttractive from "./Components/mostattractive/MostAttractive";
import ViewPoint from "./Components/viewpoint/ViewPoint";
import { Routes, Route } from "react-router-dom";
import ExplorePage from "./Components/pages/ExplorePage";
import { UserProvider } from "./context/UserContext";
import AvatarCustomization from "./Components/avatar/AvatarCustomization";
import RestaurantGuide from "./Components/pages/RestaurantGuide";
import Regions from "./Components/pages/Regions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", String(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div className="font-Montserrat bg-[#001E23]">
      <UserProvider>
        {isLoggedIn ? (
          <Routes>
            {/* Main dashboard route (shows all components) */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <MostAttractive />
                  <ViewPoint />
                </>
              }
            />

            {/* Standalone explore page */}
            <Route path="/explore" element={<ExplorePage />} />
            <Route
              path="/avatar-customization"
              element={<AvatarCustomization />}
            />
            <Route path="/restaurants" element={<RestaurantGuide />} />
            <Route path="/regions" element={<Regions />} />
          </Routes>
        ) : (
          <LoginSignup onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </UserProvider>
    </div>
  );
}

export default App;
