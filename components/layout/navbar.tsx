'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Features', href: '#features' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent">
                Easy-Challan.com
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    scrolled
                      ? 'text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="ml-4 bg-blue-700 hover:bg-blue-800 text-white"
              >
                Login
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          'md:hidden transition-all ease-in-out duration-300',
          isOpen
            ? 'max-h-screen opacity-100 pb-6 bg-white dark:bg-gray-900 shadow-lg'
            : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-2">
            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
