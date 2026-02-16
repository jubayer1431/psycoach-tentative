import { motion } from 'framer-motion';
import { X, Check, Lightbulb, TrendingUp, BarChart3, Heart, Users } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const programSchedule = [
  { icon: X, text: 'প্রোগ্রাম সূচি', color: 'text-red-500' },
  { icon: Check, text: 'বক্তৃতা ও বিষয়', color: 'text-green-500' },
  { icon: Lightbulb, text: 'আলোচনা সেশন', color: 'text-amber-500' },
];

const communityStats = [
  { label: 'অংশগ্রহণ', value: 75, color: 'bg-sage' },
  { label: 'সফলতা', value: 90, color: 'bg-coral' },
  { label: 'সন্তুষ্টি', value: 85, color: 'bg-teal' },
];

const skills = [
  { icon: Users, title: 'টিম ওয়ার্ক', desc: 'দলীয় কাজের দক্ষতা' },
  { icon: TrendingUp, title: 'লিডারশিপ', desc: 'নেতৃত্বের গুণাবলী' },
  { icon: BarChart3, title: 'এনালিটিক্স', desc: 'বিশ্লেষণাত্মক চিন্তা' },
  { icon: Heart, title: 'ইমোশনাল ইন্টেলিজেন্স', desc: 'আবেগীয় বুদ্ধিমত্তা' },
];

const partners = [
  'BRAC', 'BRAC IID', 'CNGlobe', 'bKash', 'Coca-Cola', 'ACI Food',
];

export default function SummerChallengePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-sage/10 to-coral/10">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-sage text-white rounded-full text-sm font-medium mb-6">
                  Psycoach Summer Challenge 2025
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
                  সাইকোচ সামার চ্যালেঞ্জ ২০২৫
                </h1>
                <p className="text-xl text-teal font-medium mb-4">
                  এসো, এটি পুরোনো পদ্ধতি
                </p>
                <p className="text-charcoal/70 text-lg mb-8">
                  আপনার মন বাড়ান, আপনার ক্যারিয়ার!
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
                  alt="Summer Challenge"
                  className="rounded-2xl shadow-card"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Program Schedule */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                প্রোগ্রাম সূচি বক্তৃতা ও বিষয়
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {programSchedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-3`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <span className="text-charcoal font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Application */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                সম্প্রদায়িক আবেদন
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-cream"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - stat.value / 100)}`}
                        className={`${stat.color}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-charcoal">{stat.value}%</span>
                    </div>
                  </div>
                  <span className="text-charcoal font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                দক্ষতা ও মজুরি
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-sage flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">{skill.title}</h3>
                  <p className="text-charcoal/60 text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                বাজারজাত বিশ্লেষণাত্মক বেতার
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="relative w-64 h-64 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(162 35% 63%)" strokeWidth="20" strokeDasharray="75 251" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(8 65% 75%)" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-75" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(178 36% 27%)" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-125" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(240 67% 94%)" strokeWidth="20" strokeDasharray="76 251" strokeDashoffset="-175" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-charcoal">২০২৫</span>
                    <p className="text-charcoal/60 text-sm">সামার চ্যালেঞ্জ</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-sage" />
                  <span className="text-sm text-charcoal">মেন্টাল হেল্থ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-coral" />
                  <span className="text-sm text-charcoal">লিডারশিপ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-teal" />
                  <span className="text-sm text-charcoal">কমিউনিকেশন</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-lavender" />
                  <span className="text-sm text-charcoal">অন্যান্য</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                আমাদের পার্টনার
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-cream rounded-xl px-6 py-4 shadow-soft"
                >
                  <span className="font-semibold text-charcoal">{partner}</span>
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
