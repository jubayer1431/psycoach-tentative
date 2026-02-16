import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { User, Heart, Baby } from 'lucide-react';

const therapyCards = [
  {
    icon: User,
    title: 'ইন্ডিভিজুয়াল থেরাপি',
    description: 'ব্যক্তিগত মানসিক স্বাস্থ্য সেবা',
    color: 'bg-sage/20',
    iconColor: 'text-teal',
  },
  {
    icon: Heart,
    title: 'কাপল থেরাপি',
    description: 'দাম্পত্য সম্পর্ক উন্নয়ন',
    color: 'bg-coral/20',
    iconColor: 'text-coral',
  },
  {
    icon: Baby,
    title: 'চাইল্ড থেরাপি',
    description: 'শিশু ও কিশোর মানসিক স্বাস্থ্য',
    color: 'bg-lavender/30',
    iconColor: 'text-purple-600',
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-sage/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-coral/20 rounded-full blur-3xl" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-sage/20 rounded-full text-teal text-sm font-medium mb-6"
            >
              সবার জন্য মানসিক স্বাস্থ্য সেবা
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal leading-tight mb-6"
            >
              আপনার মানসিক স্বাস্থ্যের{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-sage">
                যাত্রা শুরু করুন
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-charcoal/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              সবার ক্লিনিকাল সাইকোলজিস্টদের সাথে মানসিক স্বাস্থ্য সেবা। সারাদেশে আধুনিক ও মানসম্মত মানসিক স্বাস্থ্য সেবা।
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-charcoal font-semibold rounded-full px-8 py-6 text-lg shadow-soft hover:shadow-card transition-all hover:scale-105"
              >
                এখনই থেরাপি সেশন বুক করুন
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal text-teal hover:bg-teal hover:text-white font-semibold rounded-full px-8 py-6 text-lg transition-all"
              >
                আরও জানুন
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative grid gap-4">
              {therapyCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, translateX: -8 }}
                  className={`${card.color} rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-soft hover:shadow-card transition-all cursor-pointer`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-soft`}>
                      <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal text-lg">{card.title}</h3>
                      <p className="text-charcoal/60 text-sm">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative Circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-sage/30 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
