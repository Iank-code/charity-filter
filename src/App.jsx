import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import loginIcon from "./assets/login-icon.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center gap-12">
        <form className="flex flex-col gap-3">
          <h1 className="text-7xl">Welcome Back</h1>
          <p className="text-xl">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600">
              sign up
            </a>{" "}
          </p>

          {/* Email */}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 border-black border-2 rounded-md w-64"
          />

          {/* Password */}
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="px-3 py-2 border-black border-2 rounded-md w-64"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg w-64 py-2"
          >
            Login
          </button>
        </form>
        <img src={loginIcon} className="w-2/4" />
      </div>
    </div>
  );
}

export default App;
