// src/components/AvatarCustomization.tsx
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { AvatarCreator } from "@readyplayerme/rpm-react-sdk";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@readyplayerme/visage";
import { Suspense } from "react";

type Language = "en" | "tr" | "fr" | "de" | "es" | "pt" | "it" | "ja";

const AvatarCustomization = () => {
  const { userName, avatarUrl, setGlobalAvatarUrl } = useUser();
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const editorConfig = {
    clearCache: true,
    bodyType: "fullbody" as const,
    quickStart: false,
    language: "en" as Language,
    responseType: "gltf", // Prefer GLTF over GLB
    textureQuality: "medium",
    textureFormat: "webp",
  };

  const handleAvatarExported = (url: string) => {
    // Ensure we keep the GLB format
    const avatarUrl = url.includes(".glb") ? url : `${url}.glb`;
    setGlobalAvatarUrl(avatarUrl);
    console.log("Avatar URL saved:", avatarUrl);
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate save operation
    setTimeout(() => {
      setIsSaving(false);
      navigate("/explore"); // Navigate back to explore page
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-700 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Style Your Guidemoji</h1>
      <p className="mb-8">Customize your virtual guide, {userName}!</p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar Creator Section */}
        <div
          className="bg-[#0a2b32] rounded-lg overflow-hidden flex-1"
          style={{ height: "600px" }}
        >
          <AvatarCreator
            subdomain="toontales"
            editorConfig={editorConfig}
            onAvatarExported={handleAvatarExported}
          />
        </div>

        {/* Avatar Preview Section */}
        <div className="flex-1 flex items-center justify-center bg-[#123a43] rounded-lg mb-4 h-64">
          {avatarUrl ? (
            <Suspense
              fallback={<div className="text-white">Loading avatar...</div>}
            >
              <Avatar
                modelSrc={avatarUrl}
                style={{ width: "100%", height: "100%" }}
              />
            </Suspense>
          ) : (
            <div className="text-gray-400 text-center">
              Your avatar preview will appear here
            </div>
          )}
        </div>
      </div>
      <button
        className="bg-[#007a8a] hover:bg-[#006a7a] px-6 py-2 rounded disabled:opacity-50"
        onClick={handleSave}
        disabled={!avatarUrl || isSaving}
      >
        {isSaving ? "Saving..." : "Save Avatar"}
      </button>

      <div className="mt-6">
        <button
          className="bg-[#5a5a5a] hover:bg-[#4a4a4a] px-6 py-2 rounded"
          onClick={() => navigate("/explore")}
        >
          Back to Explore
        </button>
      </div>
    </div>
  );
};

export default AvatarCustomization;
