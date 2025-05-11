'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does the challan payment process work?',
    answer:
      'Our system verifies your challan details using your vehicle registration number or challan number. Once verified, you can choose from multiple payment methods including credit/debit cards, UPI, net banking, and digital wallets. After successful payment, an e-receipt is generated which you can download or access anytime from your account.',
  },
  {
    question: 'What happens if I want to dispute a challan?',
    answer:
      "Easy-Challan.com provides a streamlined dispute management system. You can submit a dispute request along with supporting evidence through our platform. Our team will review your case and coordinate with the relevant traffic authorities. You\'ll receive regular updates on the status of your dispute through your preferred notification method.",
  },
  {
    question: 'Can I manage challans for multiple vehicles?',
    answer:
      'Yes, you can add multiple vehicles to your account and manage challans for all of them from a single dashboard. Our premium and enterprise plans are specifically designed for users with multiple vehicles, offering features like vehicle categorization, separate payment histories, and detailed analytics per vehicle.',
  },
  {
    question: 'Is my payment information secure?',
    answer:
      'Absolutely. We implement industry-standard encryption protocols and comply with all payment security standards. Your payment information is never stored on our servers. We use trusted payment gateways that adhere to PCI DSS compliance to ensure maximum security for all transactions.',
  },
  {
    question: 'How do I receive notifications about new challans?',
    answer:
      'Upon signing up, you can set your notification preferences to receive alerts via email, SMS, or push notifications (if using our mobile app). Whenever a new challan is issued for your registered vehicle, you\'ll be promptly notified according to your preferences.',
  },
  {
    question: 'Do you provide an API for business integration?',
    answer:
      'Yes, our Enterprise plan includes API access for businesses to integrate our challan management system with their existing fleet or vehicle management software. This allows for automated challan verification, payment, and reporting directly within your business systems.',
  },
  {
    question: 'What if I miss a challan payment deadline?',
    answer:
      'Our system sends reminder notifications before payment deadlines. However, if you miss a deadline, you\'ll still be able to pay through our platform, though additional late fees may apply as per traffic authority regulations. We also provide information on the possible consequences of delayed payments.',
  },
  {
    question: 'Can I access my payment history and receipts anytime?',
    answer:
      'Yes, all your payment history and e-receipts are securely stored in your account and can be accessed anytime. You can also download, print, or share these receipts as needed for your records or reimbursement purposes.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our traffic challan management services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-800 dark:text-gray-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
