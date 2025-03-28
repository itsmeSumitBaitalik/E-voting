import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {UserPlus, Eye, EyeOff } from "lucide-react";
import toast, {Toaster} from 'react-hot-toast';
import flag from "./img/indian_flag.png";
import { api } from "../lib/axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/signup', formData);
      toast.success(response.data.message || 'Signup Successfully!');
      
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }
      
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to Signup.');
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
          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-600 mt-2">Join our voting community today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="vote@india.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="•••••••••"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              />
              <button
                type="button"
                className="cursor-pointer absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Create Account
          </button>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/login"
                className="text-orange-600 focus:ring-orange-500 font-medium inline-flex items-center"
              >
                <UserPlus className="w-4 h-4 mr-1" />
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
