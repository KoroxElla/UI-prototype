// src/hooks/useUserInteraction.ts
import { useState, useEffect } from "react";

export const useUserInteraction = () => {
  const [lastInteraction, setLastInteraction] = useState<Date>(new Date());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleActivity = () => {
      setLastInteraction(new Date());
      setIsActive(true);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('click', handleActivity);

    const checkInactivity = setInterval(() => {
      const timeSinceLastInteraction = 
        (new Date().getTime() - lastInteraction.getTime()) / (1000 * 60);
      
      if (timeSinceLastInteraction > 3) {
        setIsActive(false);
      }
    }, 10000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('click', handleActivity);
      clearInterval(checkInactivity);
    };
  }, [lastInteraction]);

  return { lastInteraction, isActive };
};