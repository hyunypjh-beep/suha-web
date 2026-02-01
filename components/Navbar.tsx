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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // 핵심 변경 로직: 메인 페이지 여부 확인
  const isHomePage = location.pathname === '/';

  // 로고 선택 로직
  // 1. 메인 페이지이면서 스크롤 안 됐을 때만 '흰색 로고'
  // 2. 그 외 모든 상황(서브 페이지, 메인 스크롤 후)은 '컬러 로고'
  const useWhiteLogo = isHomePage && !isScrolled;

  // 글자색 로직 (메인 스크롤 전만 흰색, 나머지는 짙은색)
  const textColor = useWhiteLogo ? 'text-white' : 'text-slate-900';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg transition-colors duration-300">
            <img 
              src={useWhiteLogo ? "/logo_white.png" : "/suha_logo.png"} 
              alt="Suha E&S" 
              className="h-8 md:h-10 w-auto transition-opacity duration-300" 
            />
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
              useWhiteLogo
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
            <X className={`w-8 h-8 ${useWhiteLogo ? 'text-white' : 'text-slate-900'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${useWhiteLogo ? 'text-white' : 'text-slate-900'}`} />
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
