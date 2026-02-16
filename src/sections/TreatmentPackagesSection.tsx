import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, ClipboardCheck, Brain, Smartphone, Users } from 'lucide-react';

const packages = [
  {
    icon: MessageSquare,
    title: 'কাউন্সেলিং এন্ড সাইকোথেরাপি',
    description: 'ব্যক্তিগত ও গ্রুপ থেরাপি সেশন',
    color: 'bg-sage',
    href: '/packages',
  },
  {
    icon: ClipboardCheck,
    title: 'এসেসমেন্ট প্যাকেজ',
    description: 'বিশদ মানসিক স্বাস্থ্য মূল্যায়ন',
    color: 'bg-coral',
    href: '/assessment',
  },
  {
    icon: Brain,
    title: 'ডি বি টি প্যাকেজ',
    description: 'ডায়ালেক্টিক্যাল বিহেভিয়ার থেরাপি',
    color: 'bg-teal',
    href: '/dbt',
  },
  {
    icon: Smartphone,
    title: 'ডিজিটাল মেন্টাল হেলথ প্যাকেজ',
    description: 'অনলাইন সাপোর্ট ও রিসোর্স',
    color: 'bg-purple-500',
    href: '/packages',
  },
  {
    icon: Users,
    title: 'গ্রুপ থেরাপি',
    description: 'সমবেত থেরাপি সেশন',
    color: 'bg-amber-500',
    href: '/packages',
  },
];

export default function TreatmentPackagesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            ট্রিটমেন্ট প্যাকেজ
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            আপনার প্রয়োজন অনুযায়ী বিভিন্ন ধরনের থেরাপি প্যাকেজ
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={pkg.href}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circular Icon */}
                  <div className={`w-24 h-24 lg:w-28 lg:h-28 ${pkg.color} rounded-full flex items-center justify-center shadow-soft group-hover:shadow-card transition-all mb-4`}>
                    <pkg.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-charcoal text-sm lg:text-base max-w-[150px] leading-tight">
                    {pkg.title}
                  </h3>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-charcoal font-semibold rounded-full px-8 py-6 text-lg shadow-soft hover:shadow-card transition-all hover:scale-105"
          >
            আপনার প্যাকেজ এখনই বুক করুন
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
