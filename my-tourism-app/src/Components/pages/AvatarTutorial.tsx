import { useState } from "react";
import { FiX, FiCheck } from "react-icons/fi";
import { useUser } from "../../context/UserContext";
import img1 from "../../Components/Assets/styleguidemojitut.png";
import { Avatar } from "@readyplayerme/visage";
import { Suspense } from "react";
import img2 from "../../Components/Assets/disableavatar.png";

interface AvatarTutorialProps {
  userName: string;
  onFinish: () => void;
  onDisableTutorial: () => void;
}

const AvatarTutorial = ({
  onFinish,
  onDisableTutorial,
}: Omit<AvatarTutorialProps, "userName">) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { avatarUrl, userName } = useUser();

  const slides = [
    {
      title: `Hello ${userName}!`,
      content:
        "I'll be your personal Guidemoji! A virtual guide to help you explore Newcastle Upon Tyne.",
      avatar: "👤", // Default avatar placeholder
    },
    {
      title: "What I Can Do",
      content:
        "I can tell you stories about places, suggest visits, and share fun facts!",
      examples: ["⚡ Quick facts", "🗺️ Navigation tips", "🎭 Local secrets"],
    },
    {
      title: "Enable/Disable Me",
      content:
        "Long-press on the map for 1 second to disable or hide me. To undo it, long-press again for 1 second again",
      image: img2,
    },
    {
      title: "Customize My Look",
      content:
        "Tap the Style Guidemoji button in the quick access bar to change my appearance.",
      image: img1,
    },
  ];

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onFinish();
    }
  };

  const handleDisableTutorial = () => {
    onDisableTutorial();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 rounded-lg p-6 max-w-md w-full relative">
        {/* Close button (skips tutorial) */}
        <button
          onClick={onFinish}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FiX size={24} />
        </button>

        {/* Slide content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {slides[currentSlide].title}
          </h2>
          <p className="mb-4">{slides[currentSlide].content}</p>

          {slides[currentSlide].avatar && (
            <div className="w-20 h-20 rounded-full bg-[#123a43] flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {avatarUrl ? (
                <Suspense
                  fallback={<div className="text-white">Loading...</div>}
                >
                  <Avatar
                    modelSrc={avatarUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </Suspense>
              ) : (
                <span className="text-3xl">{slides[currentSlide].avatar}</span>
              )}
            </div>
          )}

          {slides[currentSlide].examples && (
            <ul className="space-y-2 mb-4">
              {slides[currentSlide].examples.map((item, idx) => (
                <li key={idx} className="flex items-center justify-center">
                  <span className="mr-2">•</span> {item}
                </li>
              ))}
            </ul>
          )}

          {slides[currentSlide].image && (
            <img
              src={slides[currentSlide].image}
              alt="Tutorial visual"
              className="mx-auto mb-4 rounded border border-[#123a43]"
            />
          )}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mb-6">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                currentSlide === idx ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Footer (Finish/Next + Disable Tutorial) */}
        <div className="flex justify-between items-center">
          {currentSlide > 0 && (
            <button
              onClick={handleBack}
              className="bg-[#007a8a] hover:bg-[#006a7a] px-4 py-2 rounded"
            >
              Back
            </button>
          )}

          {currentSlide === slides.length - 1 && (
            <button
              onClick={handleDisableTutorial}
              className="flex items-center text-sm text-gray-400 hover:text-white"
            >
              <div className="relative mr-2">
                <FiCheck className="text-white" size={20} />
                <div className="absolute inset-0 rounded-full border-2 border-red-500 opacity-30 -m-1" />
              </div>
              <span>
                Disable tutorial{" "}
                <span className="text-gray-500">
                  (can re-enable in profile)
                </span>
              </span>
            </button>
          )}

          <button
            onClick={handleNext}
            className="ml-auto bg-[#007a8a] hover:bg-[#006a7a] px-4 py-2 rounded"
          >
            {currentSlide === slides.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarTutorial;
