import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: '회사소개', path: '/about' },
  { label: '사업영역', path: '/business' },
  { label: '인사/복지', path: '/culture' },
  { label: '고객지원', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navbar is dark (transparent on hero or slate-900 on subpages) when not scrolled
  const isNavDark = !isScrolled;
  const textColor = isNavDark ? 'text-white' : 'text-slate-900';
  
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      } ${!isScrolled && location.pathname !== '/' ? 'bg-slate-900 shadow-md' : ''}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-colors duration-300 ${isNavDark ? 'bg-white' : ''}`}>
            <img src="/suha_logo.png" alt="Suha E&S" className="h-8 md:h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium text-base transition-colors duration-200 hover:text-yellow-500 ${textColor} ${
                location.pathname === item.path ? 'text-yellow-500 font-bold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
              isNavDark
                ? 'bg-white text-blue-900 hover:bg-slate-100'
                : 'bg-blue-900 text-white hover:bg-blue-800'
            }`}
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`w-8 h-8 ${textColor}`} />
          ) : (
            <Menu className={`w-8 h-8 ${textColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-slate-100">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium ${
                location.pathname === item.path ? 'text-blue-900' : 'text-slate-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;