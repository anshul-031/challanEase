'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process email submission here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="text-gray-800 dark:text-white"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 10 L 40 10 M 10 0 L 10 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              Simplifying Traffic Challan Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Manage Challans with Ease and Efficiency
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Streamline your traffic challan process with our advanced platform. Pay, track, and dispute challans all in one place.
            </p>

            <div className="space-y-4 mb-8">
              {['Pay challans instantly online', 'Track all pending challans', 'Automated alerts & reminders', 'Completely paperless process'].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" size="lg" className="bg-blue-700 hover:bg-blue-800">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Join over 10,000+ users who trust Easy-Challan.com for their traffic challan management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/8325484/pexels-photo-8325484.jpeg"
                alt="Traffic management dashboard"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-48">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <CheckCircle className="h-4 w-4 text-blue-700 dark:text-blue-400" />
                </div>
                <div className="text-sm font-medium">Payment Success</div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Challan #2347 paid successfully</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
