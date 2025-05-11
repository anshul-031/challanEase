'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, Monitor, Database, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: Smartphone,
    title: 'Manage on the Go',
    description:
      'Access all challan management features from our mobile app. Pay, dispute, and track challans from anywhere, anytime.',
    benefits: [
      'Real-time push notifications',
      'Save vehicle documents for quick access',
      'Offline mode for viewing saved challans',
      'Scan and pay feature using QR codes',
    ],
    imageUrl: 'https://images.pexels.com/photos/6804083/pexels-photo-6804083.jpeg',
  },
  {
    id: 'dashboard',
    label: 'Web Dashboard',
    icon: Monitor,
    title: 'Comprehensive Dashboard',
    description:
      'Our intuitive web dashboard provides a complete overview of all your challans and payment history in one place.',
    benefits: [
      'Advanced filtering and sorting options',
      'Export reports in multiple formats',
      'Detailed analytics on challan patterns',
      'Multi-user access for organizations',
    ],
    imageUrl: 'https://images.pexels.com/photos/8297450/pexels-photo-8297450.jpeg',
  },
  {
    id: 'database',
    label: 'Integration',
    icon: Database,
    title: 'Seamless Integration',
    description:
      'Our platform integrates with multiple traffic authorities and payment gateways for a streamlined experience.',
    benefits: [
      'Direct connection to RTO databases',
      'Multiple payment gateway options',
      'API access for corporate users',
      'Automated data synchronization',
    ],
    imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
  },
  {
    id: 'security',
    label: 'Security',
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    description:
      'Your data security is our priority. We implement advanced encryption and security protocols to protect your information.',
    benefits: [
      'End-to-end encryption',
      'Two-factor authentication',
      'Regular security audits',
      'Compliance with data protection regulations',
    ],
    imageUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('mobile');

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Hassle-free Management
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform offers cutting-edge features designed to make traffic challan management
            simple, efficient, and stress-free.
          </p>
        </motion.div>

        <Tabs defaultValue="mobile" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex items-center gap-2 py-3 px-4"
                >
                  <feature.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{feature.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden shadow-xl h-[350px]"
                >
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}