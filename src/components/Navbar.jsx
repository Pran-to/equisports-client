import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Tooltip } from 'react-tooltip';
import { Sun, Moon, Dumbbell, LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = (
    <>
      <NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-400 font-bold" : "hover:text-emerald-400 transition"}>Home</NavLink>
      <NavLink to="/all-equipment" className={({ isActive }) => isActive ? "text-emerald-400 font-bold" : "hover:text-emerald-400 transition"}>All Sports Equipment</NavLink>
      {user && (
        <>
          <NavLink to="/add-equipment" className={({ isActive }) => isActive ? "text-emerald-400 font-bold" : "hover:text-emerald-400 transition"}>Add Equipment</NavLink>
          <NavLink to="/my-equipment" className={({ isActive }) => isActive ? "text-emerald-400 font-bold" : "hover:text-emerald-400 transition"}>My Equipment List</NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            <Dumbbell className="text-emerald-400 w-7 h-7" />
            <span>EquiSports</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 transition cursor-pointer"
              data-tooltip-id="theme-tooltip"
              data-tooltip-content={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-200" />}
            </button>
            <Tooltip id="theme-tooltip" />

            {user ? (
              <div className="flex items-center space-x-3">
                <img 
                  src={user.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"} 
                  alt="User Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover cursor-pointer"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={user.displayName || "User"}
                />
                <Tooltip id="user-tooltip" />
                <button 
                  onClick={logoutUser}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1 transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Log Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="px-4 py-2 text-sm rounded-lg hover:bg-slate-800 transition">Login</Link>
                <Link to="/register" className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-teal-600 font-semibold text-slate-950 rounded-lg hover:opacity-90 transition">Register</Link>
              </div>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-300 hover:text-white cursor-pointer">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3 flex flex-col">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;