// src/contexts/UserContext.tsx
import { createContext, useContext, useState } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  avatarUrl: string;
  setGlobalAvatarUrl: (url: string) => void; // Changed to setGlobalAvatarUrl
}

const UserContext = createContext<UserContextType>({
  userName: "",
  setUserName: () => {},
  avatarUrl: "",
  setGlobalAvatarUrl: () => {}, // Updated to match
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [avatarUrl, setGlobalAvatarUrl] = useState(
    // Changed to setGlobalAvatarUrl
    localStorage.getItem("avatarUrl") || ""
  );

  // Update functions that also persist to localStorage
  const updateUserName = (name: string) => {
    setUserName(name);
    localStorage.setItem("userName", name);
  };

  const updateAvatarUrl = (url: string) => {
    setGlobalAvatarUrl(url);
    localStorage.setItem("avatarUrl", url);
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName: updateUserName,
        avatarUrl,
        setGlobalAvatarUrl: updateAvatarUrl, // Updated to match
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
