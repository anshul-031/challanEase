import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                Easy-Challan.com
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Simplifying traffic challan management for individuals and businesses across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Online Challan Payment',
                'Challan Verification',
                'Dispute Management',
                'Documentation',
                'Analytics',
                'Reminder Service',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 rounded-r-lg px-4 flex items-center justify-center"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Easy-Challan.com. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
