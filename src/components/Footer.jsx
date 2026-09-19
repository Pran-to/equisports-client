import { Dumbbell, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-2xl font-black text-white">
            <Dumbbell className="text-emerald-400 w-8 h-8" />
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
            <li className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-emerald-400" /><span>100 Sports Ave, Tech Arena, NY</span></li>
            <li className="flex items-center space-x-2"><Phone className="w-4 h-4 text-emerald-400" /><span>+1 (800) 555-EQUI</span></li>
            <li className="flex items-center space-x-2"><Mail className="w-4 h-4 text-emerald-400" /><span>support@equisports.com</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-slate-300">
            <a href="#" className="hover:text-emerald-400 transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-400 transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-400 transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-emerald-400 transition"><Github className="w-5 h-5" /></a>
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