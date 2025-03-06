import { Zap, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="static top-0 left-0 right-0 bg-gradient-to-br from-orange-200 via-white to-green-200 backdrop-blur-sm z-50 border-b border-none">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:cursor-pointer">
            <Zap className="w-6 h-6 text-black" />
            <Link to="/landingpage">
              <span className="font-bold text-lg">VoteIndia</span>
            </Link>
          </div>
          <Link to="/login">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#046A38] text-white hover:bg-green-900 transition cursor-pointer">
              <LogIn className="w-4 h-4" />
              <span className="font-bold text-lg">LogIn</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
