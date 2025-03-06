"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import brand from '@/app/assets/ylc_logo.svg';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavbarDropdownProps {
  title: string;
  items: DropdownItem[];
  isMobile?: boolean;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ title, items, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (only for desktop)
  useEffect(() => {
    if (isMobile) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  // Mobile version of dropdown
  if (isMobile) {
    return (
      <div className="pl-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center w-full text-left py-2 text-gray-800 hover:text-blue-600 transition-colors"
        >
          {title}
          <svg 
            className={`ml-2 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>

        {isOpen && (
          <div className="pl-4 py-2 space-y-2 border-l border-gray-200 ml-2 mt-2">
            {items.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="block text-sm text-gray-700 hover:text-blue-600 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version of dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center text-gray-800 hover:text-blue-600 transition-colors text-sm"
      >
        {title}
        <svg 
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-48 bg-white shadow-lg rounded-lg mt-2 py-2 ring-1 ring-black ring-opacity-5">
          {items.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Check if in mobile view on initial load and window resize
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    
    // Check on initial load
    checkMobileView();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobileView);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobileView) {
      setIsMenuOpen(false);
    }
  }, [isMobileView]);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
 
  };

  // Close search when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isSearchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isSearchOpen && 
        searchInputRef.current && 
        !searchInputRef.current.contains(target) &&
        !(target as HTMLElement).closest('.search-container')
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Money', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Retirement', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Centrelink', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Property', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Health', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Travel', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Life', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Games', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { 
      label: 'Forum', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
    { label: 'Podcast', href: '/' },
    { 
      label: 'About us', 
      dropdown: [
        { label: 'dropdown sample', href: '/' },
      ]
    },
  ];

  return (
    <nav className="padded-wrapper bg-white shadow-md relative">
      <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <NavbarDropdown 
                    title={item.label} 
                    items={item.dropdown}
                  />
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Image className='lg:hidden' src={brand} alt="brand" width={200} height={50} />

          {/* Search Button */}
          <div className="search-container">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 cursor-pointer"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
          <div className="lg:hidden mt-4 py-2 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <NavbarDropdown 
                      title={item.label} 
                      items={item.dropdown}
                      isMobile={true}
                    />
                  ) : (
                    <Link 
                      href={item.href} 
                      className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile Search */}
            <div className="mt-4 px-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button type="submit" className="ml-2 text-gray-600 hover:text-gray-900 cursor-pointer">
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
      )}

      {/* Full-width Search Bar Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 p-4 border-t border-gray-200 search-container">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button type="submit" className="ml-2 text-gray-600 hover:text-gray-900 cursor-pointer">
              <Search className="h-5 w-5" />
            </button>
            <button 
              type="button" 
              onClick={() => setIsSearchOpen(false)}
              className="ml-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;