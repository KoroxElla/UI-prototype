import { createContext, useState, ReactNode } from "react";

// Define the type for your context value
interface ContextValue {
  activeSlideIndex: number;
  setActiveSlideIndex: (index: number) => void;
}

// Create context with proper typing
export const MyContext = createContext<ContextValue>({
  activeSlideIndex: 0,
  setActiveSlideIndex: () => {},
});

// Define props type for the provider component
interface AppContextProps {
  children: ReactNode;
}

const AppContext = ({ children }: AppContextProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const infos: ContextValue = { activeSlideIndex, setActiveSlideIndex };

  return (
    <div>
      <MyContext.Provider value={infos}>{children}</MyContext.Provider>
    </div>
  );
};

export default AppContext;
