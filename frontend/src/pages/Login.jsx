import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus, LogIn, Eye, EyeOff } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
import toast, {Toaster} from 'react-hot-toast';
import flag from "./img/indian_flag.png";
import { api } from "../lib/axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: "",
      password: "",
  });

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', formData);
      toast.success(response.data.message || 'Login Successfully!');
      
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
      
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to Login');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 flex items-center justify-center p-4">
      <Toaster/>
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <img className="w-12 h-12 mx-auto" src={flag} alt="Indian Flag" />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">Welcome to VoteSystem</h1>
          <p className="text-gray-600 mt-2">Your voice matters. Vote with confidence.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="vote@india.com"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                name="password"
                placeholder="•••••••••"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-600 focus:ring-orange-500 font-medium inline-flex items-center">
              <UserPlus className="w-4 h-4 mr-1" />
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
