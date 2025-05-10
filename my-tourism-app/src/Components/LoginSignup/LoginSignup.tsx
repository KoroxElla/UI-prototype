import React, { useState } from "react";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useUser } from "../../context/UserContext";

interface User {
  name: string;
  email: string;
  password: string;
}

interface Props {
  onLoginSuccess: () => void;
}

const LoginSignup: React.FC<Props> = ({ onLoginSuccess }) => {
  const [action, setAction] = useState<"Sign Up" | "Login">("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState<User[]>(() => {
    // Load saved users from localStorage if available
    const saved = localStorage.getItem("userDetails");
    return saved ? JSON.parse(saved) : [];
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUserName } = useUser();

  // Regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%^&*@,_.-])[A-Za-z\d$%^&*@,_.-]{8,20}$/;

  const resetErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignUp = () => {
    resetErrors();
    let valid = true;

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address format.");
      valid = false;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be 8-20 chars, include uppercase, lowercase, number, and special character ($%^&*@,_.-)."
      );
      valid = false;
    }

    if (valid) {
      const newUser: User = {
        name,
        email,
        password,
      };
      const updatedUsers = [...userDetails, newUser];
      setUserDetails(updatedUsers);
      // Save users to localStorage
      localStorage.setItem("userDetails", JSON.stringify(updatedUsers));
      setUserName(name);
      alert("Sign Up Successful! Please log in.");
      setName("");
      setEmail("");
      setPassword("");
      setAction("Login");
    }
  };

  const handleLogin = () => {
    resetErrors();

    const matchedUser = userDetails.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      setUserName(matchedUser.name);
      // Save login state to localStorage
      localStorage.setItem("isLoggedIn", "true");
      alert("Login was successful!");
      onLoginSuccess();
    } else {
      alert("Invalid login credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-700">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-90">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-700">{action}</h1>
          <div className="w-16 h-1 bg-purple-700 mx-auto mt-2 rounded"></div>
        </div>

        <div className="space-y-4">
          {action === "Sign Up" && (
            <div>
              <div className="flex items-center border rounded-lg px-3 py-2 mr-6">
                <img src={user_icon} alt="user" className="w-5 h-5 mr-2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="outline-none flex-1"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center border rounded-lg px-3 py-2 mr-6">
              <img src={email_icon} alt="email" className="w-5 h-5 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ID"
                className="outline-none flex-1"
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="relative">
            <div className="flex items-center border rounded-lg px-3 py-2 mr-6">
              <img
                src={password_icon}
                alt="password"
                className="w-5 h-5 mr-2"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="outline-none flex-1 pr-0"
              />
              <div
                className="cursor-pointer ml-2 text-gray-500 pr-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </div>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {action === "Login" && (
            <div className="text-right text-sm text-gray-500 mt-2">
              Lost Password?{" "}
              <span className="text-purple-700 cursor-pointer">
                Click here!
              </span>
            </div>
          )}

          {/* Confirm buttons */}
          {action === "Sign Up" ? (
            <button
              onClick={handleSignUp}
              className="w-full mt-4 bg-purple-700 text-white py-2 rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Confirm Sign Up
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full mt-4 bg-purple-700 text-white py-2 rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Confirm Login
            </button>
          )}
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setAction("Sign Up")}
            className={`px-4 py-2 rounded-full font-semibold ${
              action === "Sign Up"
                ? "bg-purple-700 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setAction("Login")}
            className={`px-4 py-2 rounded-full font-semibold ${
              action === "Login"
                ? "bg-purple-700 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
