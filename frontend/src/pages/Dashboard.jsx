import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home, Vote, Users, Phone, LogOut, User, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Profile from './dashboard/Profile';
import PartiesInfo from './dashboard/PartiesInfo';
import Contact from './dashboard/Contact';
import DashboardHome from './dashboard/DashboardHome';
import VotingArea from './dashboard/VotingArea'

export default function Dashboard() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex ">
              <div className="flex-shrink-0 flex items-center">
                <Vote className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">VoteSystem</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 justify-start ">
                <NavLink to="/dashboard" icon={<Home className="w-5 h-5" />}>Home</NavLink>
                <NavLink to="/dashboard/vote" icon={<Vote className="w-5 h-5" />}>Vote</NavLink>
                <NavLink to="/dashboard/parties" icon={<Users className="w-5 h-5" />}>Parties</NavLink>
                <NavLink to="/dashboard/contact" icon={<Phone className="w-5 h-5" />}>Contact</NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/dashboard/profile" className="flex items-center text-gray-700 hover:text-blue-600 mr-4">
                <User className="w-5 h-5 mr-1" />
                <span>{user?.name}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/vote" element={<VotingArea />} />
          <Route path="/parties" element={<PartiesInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes> 
      </div>
    </div>
  );
}

function NavLink({ to, children, icon }) {
  return (
    <Link to={to} className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
      {icon}
      <span className="ml-1">{children}</span>
    </Link>
  );
}
