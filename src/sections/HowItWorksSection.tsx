import { motion } from 'framer-motion';
import { Search, Calendar, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'আপনার পছন্দের থেরাপিস্ট চুজ করুন',
    description: 'আমাদের অভিজ্ঞ থেরাপিস্টদের মধ্যে থেকে আপনার পছন্দমত থেরাপিস্ট বেছে নিন',
    color: 'bg-sage',
  },
  {
    icon: Calendar,
    title: 'আপনার সময় জানান',
    description: 'আপনার সুবিধাজনক সময়ে সেশন বুক করুন, সকাল থেকে রাত পর্যন্ত',
    color: 'bg-coral',
  },
  {
    icon: MessageCircle,
    title: 'আপনার কাউন্সেলিং জার্নি শুরু করুন',
    description: 'নিরাপদ ও গোপনীয় পরিবেশে আপনার মানসিক স্বাস্থ্যের যাত্রা শুরু করুন',
    color: 'bg-teal',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            কীভাবে কাজ করে
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            মাত্র তিনটি সহজ ধাপে শুরু করুন আপনার মানসিক স্বাস্থ্যের যাত্রা
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-sage via-coral to-teal" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-sage flex items-center justify-center text-sm font-bold text-teal z-10">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
