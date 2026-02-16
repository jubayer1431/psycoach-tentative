import { motion } from 'framer-motion';
import { UserRound, Brain, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const steps = [
  {
    title: 'Connect with us',
    description: 'আমাদের সাথে যোগাযোগ করুন',
  },
  {
    title: 'Set Meeting with Psychologist',
    description: 'সাইকোলজিস্টের সাথে সাক্ষাৎ নির্ধারণ করুন',
  },
  {
    title: 'Assessment session with psychiatrist and psychologist',
    description: 'সাইকিয়াট্রিস্ট ও সাইকোলজিস্টের মূল্যায়ন সেশন',
  },
  {
    title: 'Report',
    description: 'বিশদ রিপোর্ট প্রাপ্তি',
  },
];

const benefits = [
  'সঠিক ডায়াগনোসিস',
  'ব্যক্তিগতাইজড ট্রিটমেন্ট প্ল্যান',
  'মানসিক স্বাস্থ্যের সম্পূর্ণ চিত্র',
  'ভবিষ্যৎ পরিকল্পনার নির্দেশনা',
];

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-100 to-lavender">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                এসেসমেন্ট প্যাকেজ
              </h1>
              <p className="text-charcoal/70 text-lg">
                বিশদ মানসিক স্বাস্থ্য মূল্যায়নের মাধ্যমে সঠিক চিকিৎসা নির্ধারণ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-charcoal/80 text-lg leading-relaxed">
                আমাদের এসেসমেন্ট প্যাকেজে অভিজ্ঞ সাইকিয়াট্রিস্ট এবং সাইকোলজিস্টের সমন্বিত মূল্যায়নের মাধ্যমে 
                আপনার মানসিক স্বাস্থ্যের একটি সম্পূর্ণ চিত্র পাবেন। এটি সঠিক ডায়াগনোসিস এবং 
                কার্যকর চিকিৎসা পরিকল্পনা তৈরিতে সাহায্য করে।
              </p>
            </motion.div>
          </div>
        </section>

        {/* Two Column Section */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Psychiatrist Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-soft border-2 border-purple-200"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <UserRound className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">সাইকিয়াট্রিস্ট</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>মেডিকেল হিস্টরি রিভিউ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>ঔষধ পরামর্শ (প্রয়োজনে)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>শারীরিক স্বাস্থ্য মূল্যায়ন</span>
                  </li>
                </ul>
              </motion.div>

              {/* Psychologist Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-soft border-2 border-purple-200"
              >
                <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">সাইকোলজিস্ট</h3>
                <ul className="space-y-3 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>মনস্তাত্ত্বিক টেস্ট</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>বিহেভিয়ারাল অ্যাসেসমেন্ট</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span>থেরাপি প্ল্যান তৈরি</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                How it helps in treatment
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-lavender rounded-2xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-charcoal font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                How it works
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mb-2 shadow-soft">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium text-charcoal max-w-[120px]">{step.title}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-purple-400 hidden lg:block" />
                  )}
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
