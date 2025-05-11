'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Abhishek Sharma',
    role: 'Individual User',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    content:
      'Easy-Challan.com helped me clear all my pending challans in just a few clicks. The notifications feature ensures I never miss a payment deadline. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priyanka Patel',
    role: 'Fleet Manager',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    content:
      'Managing challans for our company fleet of 50 vehicles used to be a nightmare. With Easy-Challan.com, I can now handle everything from a single dashboard, saving us hours every week.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    role: 'Taxi Service Owner',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    content:
      'The analytics feature helps me identify drivers with frequent violations. This has improved our service quality and reduced our monthly challan expenses by 40%.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Individual User',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    content:
      'I was skeptical at first, but the dispute resolution feature saved me from paying an incorrect challan. The customer support team was extremely helpful throughout the process.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Logistics Company',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    content:
      'The API integration with our existing fleet management system works flawlessly. We now have real-time challan data for all our vehicles across multiple states.',
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Responsive items per view
  const getItemsPerView = () => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, width]);

  const itemsPerView = getItemsPerView();
  const totalSlides = testimonials.length - itemsPerView + 1;

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalSlides - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thousands of individuals and businesses trust Easy-Challan.com for their traffic challan management needs.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full ${
                    itemsPerView === 1 ? 'flex-100' : itemsPerView === 2 ? 'flex-50' : 'flex-33'
                  } px-4 flex-shrink-0`}
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={cn(
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          )}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">
                      "{testimonial.content}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={cn(
                'rounded-full',
                currentIndex === 0 && 'opacity-50 cursor-not-allowed'
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(index);
                  }}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-colors',
                    index === currentIndex
                      ? 'bg-blue-700 dark:bg-blue-500'
                      : 'bg-gray-300 dark:bg-gray-700'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
