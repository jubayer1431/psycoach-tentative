import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Heart, Zap, Shield } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const faqs = [
  {
    question: 'What is DBT and how it works',
    answer: 'DBT (Dialectical Behavior Therapy) হলো একটি কগনিটিভ বেহেভিয়ারাল থেরাপি যা মূলত বর্ডারলাইন পার্সোনালিটি ডিজঅর্ডারের চিকিৎসায় ব্যবহৃত হয়। এটি মাইন্ডফুলনেস, ডিস্ট্রেস টলারেন্স, ইমোশন রেগুলেশন এবং ইন্টারপারসনাল ইফেক্টিভনেস শেখায়।',
  },
  {
    question: 'How DBT works',
    answer: 'DBT ব্যক্তিদের তাদের আবেগ বুঝতে এবং নিয়ন্ত্রণ করতে সাহায্য করে। এটি গ্রুপ সেশন এবং ব্যক্তিগত থেরাপির মাধ্যমে কাজ করে, যেখানে স্কিল শেখানো হয় এবং রিয়েল-লাইফ সিচুয়েশনে প্রয়োগ করা হয়।',
  },
];

const modules = [
  {
    number: '০১',
    title: 'Mindfulness',
    description: 'বর্তমান মুহূর্তে সচেতন থাকা এবং গ্রহণ করা',
    icon: BookOpen,
    color: 'bg-sage',
  },
  {
    number: '০২',
    title: 'Distress Tolerance',
    description: 'কঠিন পরিস্থিতি সামলানোর ক্ষমতা বাড়ানো',
    icon: Shield,
    color: 'bg-coral',
  },
  {
    number: '০৩',
    title: 'Emotion Regulation',
    description: 'আবেগ বুঝতে এবং নিয়ন্ত্রণ করতে শেখা',
    icon: Heart,
    color: 'bg-teal',
  },
  {
    number: '০৪',
    title: 'Interpersonal Effectiveness',
    description: 'সম্পর্ক উন্নয়ন এবং যোগাযোগ ক্ষমতা বাড়ানো',
    icon: Zap,
    color: 'bg-purple-500',
  },
];

export default function DBTPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-teal to-sage text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                The DBT Coach
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                ডি বি টি প্রোগ্রাম
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                ডায়ালেক্টিক্যাল বিহেভিয়ার থেরাপি - আবেগ নিয়ন্ত্রণ এবং মানসিক স্বাস্থ্য উন্নয়নের একটি কার্যকর পদ্ধতি
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold text-charcoal mb-8 text-center"
              >
                সাধারণ প্রশ্নাবলী
              </motion.h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-sage/20 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
                    >
                      <span className="font-semibold text-charcoal">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-teal transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-charcoal/70">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                How DBT Works
              </h2>
              <p className="text-charcoal/60 max-w-2xl mx-auto">
                চারটি মূল মডিউলের মাধ্যমে DBT আপনার মানসিক স্বাস্থ্য উন্নয়ন করে
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 border-2 border-transparent hover:border-sage/20"
                >
                  <div className={`w-14 h-14 ${module.color} rounded-xl flex items-center justify-center mb-4`}>
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-charcoal/20">{module.number}</span>
                  <h3 className="font-semibold text-charcoal text-lg mt-2 mb-2">{module.title}</h3>
                  <p className="text-charcoal/60 text-sm">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
