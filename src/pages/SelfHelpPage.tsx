import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Frown, Brain, Users, AlertCircle, Briefcase, Sparkles, ChevronRight } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const problems = [
  {
    icon: Frown,
    text: 'আমার প্রায়ই মন খারাপ থাকে',
    link: '/packages',
    condition: 'Depression',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Brain,
    text: 'আমি আমার চিন্তা নিয়ন্ত্রণ করতে পারি না',
    link: '/gad',
    condition: 'GAD',
    color: 'bg-sage/30 text-teal',
  },
  {
    icon: Users,
    text: 'সামাজিক পরিবেশে আমি কথা বলতে ভয় পাই',
    link: '/packages',
    condition: 'Social Anxiety',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: AlertCircle,
    text: 'আমার মধ্যে প্যানিক এটাকের ভয় কাজ করে',
    link: '/packages',
    condition: 'Panic Disorder',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Briefcase,
    text: 'আমি ব্যক্তিগত ও পেশাগত জীবন সামাল দিতে পারছি না',
    link: '/packages',
    condition: 'Burnout',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Sparkles,
    text: 'আমার OCD/শুচিবায়ু আছে',
    link: '/packages',
    condition: 'OCD Disorder',
    color: 'bg-coral/30 text-coral',
  },
];

export default function SelfHelpPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-sage/10 to-coral/10">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-sage text-white rounded-full text-sm font-medium mb-6">
                সেলফ হেল্প প্রোগ্রাম
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                আপনি কোন সমস্যায় ভুগছেন???
              </h1>
              <p className="text-charcoal/70 text-lg">
                আপনার সমস্যা অনুযায়ী সঠিক প্রোগ্রাম বেছে নিন এবং নিজের উপর কাজ শুরু করুন
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Selection */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl mx-auto space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={problem.link}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center justify-between p-6 bg-cream rounded-2xl shadow-soft hover:shadow-card transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl ${problem.color} flex items-center justify-center`}>
                          <problem.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal text-lg">{problem.text}</p>
                          <span className="text-sm text-charcoal/50">{problem.condition}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-charcoal/30 group-hover:text-teal transition-colors" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-teal to-sage text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2">৫০০০+</div>
                <p className="text-white/80">সফল কেস</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">৫০+</div>
                <p className="text-white/80">অভিজ্ঞ থেরাপিস্ট</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">৯০%</div>
                <p className="text-white/80">সাফল্যের হার</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
