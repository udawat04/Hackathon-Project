
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
 
  const handleGoogleLogin = async (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded); // You can extract user data from here
    

    // Send user data to backend
    const userData = {
      googleId: credentialResponseDecoded.sub,
      email: credentialResponseDecoded.email,
      name: credentialResponseDecoded.name,
    };


    try {
      const response = await fetch("http://localhost:4000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);
      localStorage.setItem("UserData", JSON.stringify(data)); 
          // Handle successful login response
    } catch (error) {
      console.error("Error logging in:", error);
    }
    navigate("/admin");
     window.location.reload();
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-16 bg-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
      <form className="bg-gray-800 shadow-md rounded-lg p-6">
        {/* Error Message Placeholder */}
        <p className="text-red-500 mb-4 hidden">Error message goes here</p>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-gray-500 transition-colors"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-white mb-2 font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-gray-500 transition-colors"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Email/Password Login Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-500 transition-colors duration-200 mb-4"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <hr className="flex-1 border-gray-600" />
          <span className="px-3 text-gray-400">or</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        {/* Google Login Button */}
        {/* Google Login Button (Custom Style) */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log("Login Failed");
            }}
            theme="filled_blue"
            text="signin"
            size="large"
            shape="rectangular"
            width="300"
          />
        </div>
      </form>

      {/* Signup Link */}
      <p className="mt-4 text-center text-gray-300">
        Don't have an account?{" "}
        <a href="/signup" className="text-gray-300 hover:text-white">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
