import { motion } from 'framer-motion';
import { Check, BookOpen, Users, MessageSquare, Video, FileText, Headphones, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const learningPoints = [
  'কেন আপনার দুশ্চিন্তা থামে না — এবং এর পেছনের মনস্তাত্ত্বিক কারণ',
  '"কি হবে যদি..." ধরনের চিন্তার চক্র ভাঙার বাস্তব কৌশল',
  'Mindfulness ও শরীরবিদ্যায় রিল্যাক্সেশন টেকনিক',
  'জানালিং ও চিন্তা পুনর্গঠনের (Thought Restructuring) সহজ পদ্ধতি',
  'চিন্তা আর বাস্তবতার পার্থক্য বুঝে সিদ্ধান্ত নেওয়া',
];

const targetAudience = [
  {
    title: 'যারা অতিরিক্ত দুশ্চিন্তায় ভোগেন',
    description: 'দৈনন্দিন জীবনে অত্যধিক চিন্তা ও উদ্বেগে ভোগেন',
  },
  {
    title: 'যারা থেরাপিতে যেতে পারছেন না কিন্তু নিজের উপর কাজ করতে চান',
    description: 'সময় বা অবস্থার কারণে সরাসরি থেরাপি নিতে পারছেন না',
  },
  {
    title: 'যারা প্র্যাক্টিক্যাল, বিজ্ঞানভিত্তিক সমাধান চান',
    description: 'গবেষণায় প্রমাণিত পদ্ধতি অনুসরণ করতে চান',
  },
  {
    title: 'যারা নিরাপদ ও গোপন পরিবেশে শিখতে চান',
    description: 'গোপনীয়তা বজায় রেখে নিজের গতিতে শিখতে চান',
  },
];

const courseBenefits = [
  { icon: BookOpen, text: '৬টি সেশন | সপ্তাহে ১ ঘণ্টা' },
  { icon: Video, text: 'ভিডিও, কুইজ, লাইভ ও হোমওয়ার্ক' },
  { icon: FileText, text: 'ব্যক্তিগত চিন্তা লগ ও সেলফ এসেসমেন্ট' },
  { icon: Users, text: 'গ্রুপ সাপোর্ট ও কমিউনিটি' },
  { icon: MessageSquare, text: 'টেক্সট-বেইজড সহায়তা' },
  { icon: Headphones, text: 'প্রিমিয়াম ভার্সন কাউন্সেলিং সেশন' },
];

export default function GADPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-sage/10 to-coral/10 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-coral/20 rounded-full blur-3xl" />
          
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-sage text-white rounded-full text-sm font-medium mb-6">
                  GAD
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
                  দুশ্চিন্তার বেড়াজাল থেকে{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-sage">
                    মুক্তি
                  </span>
                </h1>
                <p className="text-charcoal/70 text-lg mb-8">
                  সাধারণ উদ্বেগ ব্যাধি (GAD) থেকে মুক্তি পেতে গবেষণায় প্রমাণিত এই প্রোগ্রামে যোগ দিন
                </p>
                <Button
                  size="lg"
                  className="bg-coral hover:bg-coral/90 text-charcoal font-semibold rounded-full px-8 py-6 text-lg shadow-soft hover:shadow-card transition-all hover:scale-105"
                >
                  এখনই রেজিস্টার করুন
                </Button>
              </motion.div>
              
              {/* Right - Pricing Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-coral to-sage flex flex-col items-center justify-center text-white shadow-card mx-auto">
                  <span className="text-3xl font-bold">৯০০০</span>
                  <span className="text-sm">টাকার সেশন</span>
                  <div className="w-12 h-0.5 bg-white/30 my-2" />
                  <span className="text-4xl font-bold">৩৫০০</span>
                  <span className="text-sm">টাকায়!</span>
                </div>
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal to-sage flex flex-col items-center justify-center text-white shadow-card mx-auto text-center p-4">
                  <span className="text-4xl font-bold mb-2">৯০%</span>
                  <span className="text-xs leading-tight">গবেষণায় প্রমাণিত এই ট্রিটমেন্টের মাধ্যমে মানসিক সমস্যা কমে</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left - Learning Points */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
                  আপনি যা শিখবেন:
                </h2>
                <div className="space-y-4">
                  {learningPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-cream rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-charcoal/80">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Right - Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="bg-gradient-to-br from-teal to-sage text-white rounded-2xl p-8 text-center shadow-card">
                  <div className="text-5xl font-bold mb-2">৬</div>
                  <p className="text-white/80 mb-4">টি সেশন</p>
                  <div className="w-full h-0.5 bg-white/20 my-4" />
                  <div className="text-5xl font-bold mb-2">৬</div>
                  <p className="text-white/80 mb-4">টি গ্রুপ সেশন</p>
                  <div className="w-full h-0.5 bg-white/20 my-4" />
                  <MessageSquare className="w-10 h-10 mx-auto mb-2" />
                  <p className="text-white/80">টেক্সট বেসড সাপোর্ট</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Is This Course For */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                কোর্সটি কাদের জন্য
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Preview Video */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                কোর্স রিলেটেড প্রোমোশনাল ভিডিও
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <div className="aspect-video bg-charcoal/5 rounded-2xl flex items-center justify-center shadow-card">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-charcoal/60">ভিডিও প্লেয়ার</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-sage/10 to-coral/10">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                কোর্সে আপনি যা পাবেন
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {courseBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-soft"
                >
                  <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-charcoal/80 font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-10"
            >
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-charcoal font-semibold rounded-full px-8 py-6 text-lg shadow-soft hover:shadow-card transition-all hover:scale-105"
              >
                এখনই রেজিস্টার করুন
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
