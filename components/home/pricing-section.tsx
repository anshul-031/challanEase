'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'For individuals with occasional challans',
    priceMonthly: 99,
    priceYearly: 999,
    features: [
      'Pay up to 10 challans per month',
      'Basic challan verification',
      'Email notifications',
      'Standard payment options',
      'Download e-receipts',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Premium',
    description: 'For frequent drivers with multiple vehicles',
    priceMonthly: 249,
    priceYearly: 2499,
    features: [
      'Unlimited challan payments',
      'Advanced challan verification',
      'SMS & Email notifications',
      'All payment options',
      'Download e-receipts',
      'Dispute management',
      'Up to 3 vehicles',
      'Basic analytics',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For businesses with multiple vehicles',
    priceMonthly: 699,
    priceYearly: 6999,
    features: [
      'Unlimited challan payments',
      'Priority challan verification',
      'Advanced notifications',
      'All payment options',
      'Download e-receipts',
      'Priority dispute management',
      'Unlimited vehicles',
      'Advanced analytics & reporting',
      'Dedicated account manager',
      'API access',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that works best for your needs with our straightforward pricing options.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-sm font-medium ${
                !annual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={annual}
              onCheckedChange={setAnnual}
              className="data-[state=checked]:bg-blue-700"
            />
            <span
              className={`text-sm font-medium ${
                annual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Annual <span className="text-green-600 dark:text-green-400">(Save 15%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <span className="bg-blue-700 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <Card
                className={`h-full flex flex-col ${
                  plan.popular
                    ? 'border-blue-200 dark:border-blue-800 shadow-lg ring-1 ring-blue-700/20'
                    : ''
                }`}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <p className="text-4xl font-bold">
                      ₹{annual ? plan.priceYearly : plan.priceMonthly}
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        /{annual ? 'year' : 'month'}
                      </span>
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-blue-700 hover:bg-blue-800'
                        : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
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