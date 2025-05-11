'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, AlertTriangle, FileText, BarChart4, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

const services = [
  {
    title: 'Online Payment',
    description: 'Pay your challans instantly online using various payment methods including credit/debit cards, UPI, and net banking.',
    icon: CreditCard,
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Challan Verification',
    description: 'Verify the authenticity of your traffic challans and check all details before proceeding with payment.',
    icon: ShieldCheck,
    color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  },
  {
    title: 'Dispute Management',
    description: 'Contest incorrect or disputed challans through our streamlined process with minimum documentation.',
    icon: AlertTriangle,
    color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Documentation',
    description: 'Access and download all your challan receipts and payment history for record-keeping and legal purposes.',
    icon: FileText,
    color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track patterns, frequencies, and types of violations to help improve driving habits and reduce future challans.',
    icon: BarChart4,
    color: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
  },
  {
    title: 'Reminder Service',
    description: 'Get timely notifications about pending challans, payment deadlines, and court appearance dates.',
    icon: Clock,
    color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive traffic challan management solutions 
            for individuals and organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}