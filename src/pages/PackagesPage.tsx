import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, ClipboardCheck, Brain, Users, Heart, Baby, Frown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const mainPackages = [
  {
    icon: MessageSquare,
    title: 'কাউন্সেলিং এন্ড সাইকোথেরাপি',
    description: 'ব্যক্তিগত ও গ্রুপ থেরাপি সেশন আমাদের অভিজ্ঞ সাইকোলজিস্টদের সাথে',
    price: '৩৫০০ টাকা থেকে',
    color: 'bg-sage',
    href: '/therapists',
  },
  {
    icon: ClipboardCheck,
    title: 'এসেসমেন্ট প্যাকেজ',
    description: 'বিশদ মানসিক স্বাস্থ্য মূল্যায়ন সাইকিয়াট্রিস্ট ও সাইকোলজিস্টের সমন্বয়ে',
    price: '৫০০০ টাকা',
    color: 'bg-coral',
    href: '/assessment',
  },
  {
    icon: Brain,
    title: 'ডি বি টি প্যাকেজ',
    description: 'ডায়ালেক্টিক্যাল বিহেভিয়ার থেরাপি - আবেগ নিয়ন্ত্রণের কার্যকর পদ্ধতি',
    price: '৮০০০ টাকা',
    color: 'bg-teal',
    href: '/dbt',
  },
];

const specializedPrograms = [
  {
    icon: Frown,
    title: 'GAD প্রোগ্রাম',
    description: 'সাধারণ উদ্বেগ ব্যাধি চিকিৎসা',
    color: 'bg-blue-500',
    href: '/gad',
  },
  {
    icon: Heart,
    title: 'Depression প্রোগ্রাম',
    description: 'ডিপ্রেশন ম্যানেজমেন্ট',
    color: 'bg-purple-500',
    href: '/self-help',
  },
  {
    icon: Users,
    title: 'Social Anxiety',
    description: 'সামাজিক উদ্বেগ চিকিৎসা',
    color: 'bg-amber-500',
    href: '/self-help',
  },
  {
    icon: Baby,
    title: 'চাইল্ড থেরাপি',
    description: 'শিশু মানসিক স্বাস্থ্য',
    color: 'bg-pink-500',
    href: '/therapists',
  },
];

export default function PackagesPage() {
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                ট্রিটমেন্ট প্যাকেজ
              </h1>
              <p className="text-charcoal/70 text-lg">
                আপনার প্রয়োজন অনুযায়ী বিভিন্ন ধরনের থেরাপি প্যাকেজ বেছে নিন
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Packages */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                প্রধান প্যাকেজসমূহ
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {mainPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={pkg.href}>
                    <div className="bg-cream rounded-2xl p-8 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 h-full">
                      <div className={`w-16 h-16 ${pkg.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-charcoal text-xl mb-3">{pkg.title}</h3>
                      <p className="text-charcoal/60 mb-4">{pkg.description}</p>
                      <p className={`${pkg.color.replace('bg-', 'text-')} font-bold text-lg`}>
                        {pkg.price}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Programs */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                বিশেষায়িত প্রোগ্রাম
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={program.href}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 text-center">
                      <div className={`w-14 h-14 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <program.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-charcoal mb-2">{program.title}</h3>
                      <p className="text-charcoal/60 text-sm">{program.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-teal to-sage text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                সঠিক প্যাকেজ বেছে নিতে সাহায্য চান?
              </h2>
              <p className="text-white/80 mb-8">
                আমাদের এক্সপার্টদের সাথে কথা বলে আপনার জন্য সেরা প্যাকেজ নির্বাচন করুন
              </p>
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-charcoal font-semibold rounded-full px-8"
              >
                যোগাযোগ করুন
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
