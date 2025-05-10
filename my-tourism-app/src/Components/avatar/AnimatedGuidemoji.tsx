import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@readyplayerme/visage";
import { Suspense } from "react";
import { useUserInteraction } from "../../hooks/useUserInteraction";

interface AnimatedGuidemojiProps {
  avatarUrl: string;
  isSpeaking: boolean;
}

// Define a type for our interval refs that works in both browser and Node.js
type IntervalHandle = ReturnType<typeof setInterval>;

const AnimatedGuidemoji: React.FC<AnimatedGuidemojiProps> = ({
  avatarUrl,
  isSpeaking,
}) => {
  const { lastInteraction, isActive } = useUserInteraction();

  // Animation states
  const [currentAnimation, setCurrentAnimation] = useState<string>("idle");
  const [isWaving, setIsWaving] = useState<boolean>(false);
  const [isWinking, setIsWinking] = useState<boolean>(false);
  const [isSnoring, setIsSnoring] = useState<boolean>(false);

  // Refs for intervals - using number for browser environment
  const winkIntervalRef = useRef<IntervalHandle | null>(null);
  const waveIntervalRef = useRef<IntervalHandle | null>(null);
  const inactivityCheckRef = useRef<IntervalHandle | null>(null);

  // Handle speaking animation
  useEffect(() => {
    if (isSpeaking) {
      setCurrentAnimation("talking");
      const timer = setTimeout(() => {
        setCurrentAnimation("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSpeaking]);

  // Handle winking every 60 seconds
  useEffect(() => {
    winkIntervalRef.current = setInterval(() => {
      if (!isSpeaking && !isWaving && !isSnoring) {
        setIsWinking(true);
        setTimeout(() => setIsWinking(false), 1000);
      }
    }, 60000);

    return () => {
      if (winkIntervalRef.current) clearInterval(winkIntervalRef.current);
    };
  }, [isSpeaking, isWaving, isSnoring]);

  // Handle waving every 45 seconds
  useEffect(() => {
    waveIntervalRef.current = setInterval(() => {
      if (!isSpeaking && !isWinking && !isSnoring) {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 2000);
      }
    }, 45000);

    return () => {
      if (waveIntervalRef.current) clearInterval(waveIntervalRef.current);
    };
  }, [isSpeaking, isWinking, isSnoring]);

  // Handle inactivity (snoring after 3 minutes)
  useEffect(() => {
    inactivityCheckRef.current = setInterval(() => {
      if (lastInteraction) {
        const minutesSinceInteraction =
          (new Date().getTime() - lastInteraction.getTime()) / (1000 * 60);

        if (minutesSinceInteraction >= 3 && isActive) {
          setIsSnoring(true);
          setCurrentAnimation("sleeping");
        } else {
          setIsSnoring(false);
          if (!isSpeaking && !isWinking && !isWaving) {
            setCurrentAnimation("idle");
          }
        }
      }
    }, 10000);

    return () => {
      if (inactivityCheckRef.current) clearInterval(inactivityCheckRef.current);
    };
  }, [lastInteraction, isActive, isSpeaking, isWinking, isWaving]);

  // Determine animation based on state
  useEffect(() => {
    if (isSpeaking) {
      setCurrentAnimation("talking");
    } else if (isWaving) {
      setCurrentAnimation("waving");
    } else if (isWinking) {
      setCurrentAnimation("winking");
    } else if (isSnoring) {
      setCurrentAnimation("sleeping");
    } else {
      setCurrentAnimation("idle");
    }
  }, [isSpeaking, isWaving, isWinking, isSnoring]);

  // Animation configurations
  const animationMap: Record<string, string> = {
    idle: "",
    talking: "URL_TO_TALKING_ANIMATION",
    waving: "URL_TO_WAVING_ANIMATION",
    winking: "URL_TO_WINKING_ANIMATION",
    sleeping: "URL_TO_SLEEPING_ANIMATION",
  };

  return (
    <div className="relative">
      <div className="w-24 h-24">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <Avatar
            modelSrc={avatarUrl}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
            animationSrc={animationMap[currentAnimation]}
          />
        </Suspense>
      </div>

      {/* Status indicator for debugging */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-xs bg-black bg-opacity-50 text-white">
        {currentAnimation}
      </div>
    </div>
  );
};

export default AnimatedGuidemoji;
