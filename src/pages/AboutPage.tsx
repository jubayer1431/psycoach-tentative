import { motion } from 'framer-motion';
import { Target, BookOpen, Award, Quote } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const impactData = [
  { category: 'মোট আবেদন', value: '২০০টি দল (৬০০+ জন ব্যক্তি)' },
  { category: 'অনলাইন প্রশিক্ষণ অংশগ্রহণ', value: '১০০টি দল (৩৫০+ জন ব্যক্তি)' },
  { category: 'সফলভাবে প্রশিক্ষণ সম্পন্ন', value: '৯৫+ জন (৩৪টি দল)' },
  { category: 'মার্চ পর্যন্ত বাস্তবায়ন', value: '২০টি দল (৫২টি সেশন)' },
  { category: 'মোট ব্যক্তি পর্যায়ে পৌঁছানো', value: '২৩৮৮+ জন' },
  { category: 'অংশগ্রহণকারী প্রতিষ্ঠান', value: '৪টি জোনের ৩৭টি শিক্ষা প্রতিষ্ঠান' },
];

const topics = [
  { name: 'সাধারণ মানসিক স্বাস্থ্য ও সুস্থতা', percentage: 20.5 },
  { name: 'স্ট্রেস ও পরীক্ষার সময় মানসিক স্বাস্থ্য', percentage: 17.6 },
  { name: 'ডিপ্রেশন, শৈশব ও পারিবারিক প্রভাব', percentage: 17.6 },
  { name: 'বাবা-মা ও সন্তানের যোগাযোগ', percentage: 17.6 },
  { name: 'ডিজিটাল আসক্তি ও মনোযোগ', percentage: 11.8 },
  { name: 'একাকীত্ব ও সামাজিক যোগাযোগ', percentage: 11.8 },
];

const quotes = [
  {
    text: 'আমরা চেয়েছিলাম একটি বাস্তবসম্মত ও দায়িত্বশীল উদ্যোগ। তরুণরাই আমাদের সবচেয়ে বড় শক্তি, সঠিক দিকনির্দেশনা পেলে তারাই মানসিক স্বাস্থ্য খাতে বড় পরিবর্তন আনতে পারে।',
    author: 'সায়মা আক্তার',
    role: 'Founder, Psycoach Bangladesh',
  },
  {
    text: 'লজ্জা ও ভয় মানসিক স্বাস্থ্যের বড় বাধা। এই চ্যালেঞ্জে তরুণদের মাধ্যমে সেই বাধা ভাঙতে গুরুত্বপূর্ণ ভূমিকা রাখবে।',
    author: 'ড. সাদিয়া আফরিন',
    role: 'National Mental Health Institute',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-sage/10 to-coral/10">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-sage flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                প্রোগ্রামের মূল লক্ষ্য ও দর্শন
              </h1>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                বাংলাদেশে মানসিক স্বাস্থ্য সেবার অভাব এবং সামাজিক কুসংস্কারের কারণে 
                ৯২% মানুষ মানসিক স্বাস্থ্য সেবার বাইরে থাকে।
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                তরুণদের প্রশিক্ষণ, মেন্টরশিপ এবং প্রয়োজনীয় সম্পদ প্রদানের মাধ্যমে 
                তাদের দায়িত্বশীল ও দক্ষ 'চেঞ্জমেকার' হিসেবে গড়ে তোলা।
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-soft inline-block">
                <p className="text-teal font-medium italic">
                  "সঠিক গাইডলাইন ও প্রশিক্ষণ পেলে তরুণরা তাদের কমিউনিটির জন্য 
                  কার্যকর মানসিক স্বাস্থ্য সমাধান তৈরি করতে সক্ষম।"
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Impact in Numbers
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-cream rounded-2xl overflow-hidden shadow-soft">
                {impactData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 lg:p-6 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-cream'
                    }`}
                  >
                    <span className="font-medium text-charcoal">{item.category}</span>
                    <span className="text-teal font-semibold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training & Modules */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-xl bg-coral flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                প্রশিক্ষণ ও মডিউল
              </h2>
              <p className="text-charcoal/60 max-w-2xl mx-auto">
                অংশগ্রহণকারীরা ৮ সপ্তাহ ধরে ১০টি অনলাইন সেশন এবং ৪টি ইন-পারসন ওয়ার্কশপ অংশ নিয়েছেন
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-charcoal mb-6 text-center">
                বাস্তবায়িত বিষয়ভিত্তিক পরিসংখ্যান
              </h3>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-soft"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-charcoal font-medium">{topic.name}</span>
                      <span className="text-teal font-bold">{topic.percentage}%</span>
                    </div>
                    <div className="h-2 bg-cream rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${topic.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-sage to-teal rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Graduation Ceremony */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-xl bg-teal flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Graduation Ceremony
              </h2>
              <p className="text-charcoal/60">
                ঢাকা, ২৪ জানুয়ারি ২০২৬: মানসিক স্বাস্থ্য সেবা প্রশিক্ষণ সমাপনী অনুষ্ঠান
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-gradient-to-br from-sage/10 to-coral/10 rounded-2xl p-8"
                >
                  <Quote className="w-8 h-8 text-sage mb-4" />
                  <p className="text-charcoal/80 leading-relaxed mb-6">{quote.text}</p>
                  <div>
                    <p className="font-semibold text-charcoal">{quote.author}</p>
                    <p className="text-charcoal/60 text-sm">{quote.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Summary */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Project Summary
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-square bg-white rounded-2xl shadow-soft flex items-center justify-center"
                >
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-teal">{item}</span>
                    </div>
                    <p className="text-charcoal/60 text-sm">প্রজেক্ট ইমেজ {item}</p>
                  </div>
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
