import { FaDumbbell, FaFacebook, FaGithub, FaInstagram, FaMailBulk, FaMapPin, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-2xl font-black text-white">
            <FaDumbbell className="text-emerald-400 w-8 h-8" />
            <span>EquiSports</span>
          </div>
          <p className="text-sm">Premium athletic gear, apparel, and specialized sports accessories built for maximum performance and durability.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
            <li><Link to="/all-equipment" className="hover:text-emerald-400">All Products</Link></li>
            <li><Link to="/login" className="hover:text-emerald-400">Login Account</Link></li>
            <li><Link to="/register" className="hover:text-emerald-400">Register</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2"><FaMapPin className="w-4 h-4 text-emerald-400" /><span>100 Sports Ave, Tech Arena, Kollyanpur,Dhaka</span></li>
            <li className="flex items-center space-x-2"><FaPhone className="w-4 h-4 text-emerald-400" /><span>+88017554.....</span></li>
            <li className="flex items-center space-x-2"><FaMailBulk className="w-4 h-4 text-emerald-400" /><span>prantochakrobortty24@gmail.com</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-slate-300">
            <a href={import.meta.env.VITE_SOCIAL_FB} className="hover:text-emerald-400 transition"><FaFacebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-400 transition"><FaTwitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-400 transition"><FaInstagram className="w-5 h-5" /></a>
            <a href={import.meta.env.VITE_SOCIAL_GIT} className="hover:text-emerald-400 transition"><FaGithub className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} EquiSports Inc. All rights reserved. Built for Champions.
      </div>
    </footer>
  );
};

export default Footer;