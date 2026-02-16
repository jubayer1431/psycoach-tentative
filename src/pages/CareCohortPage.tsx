import { motion } from 'framer-motion';
import { Wallet, GraduationCap, Shield, Award, Phone } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const features = [
  {
    icon: Wallet,
    title: 'সাশ্রয়ী ও প্রযোজ্য',
    description: 'মাত্র ৩০০০ টাকায় পুরো ৩ মাসের প্যাকেজ',
  },
  {
    icon: GraduationCap,
    title: 'বিশ্ববিদ্যালয় তত্ত্বাবধান',
    description: 'ডাক্তর বকলম জুনিয়র ট্রেনিংয়ের মাধ্যমে ক্লিনিক্যাল সাইকোলজিস্টদের সুপারভিশন',
  },
  {
    icon: Shield,
    title: 'গোপনীয়তার নিশ্চয়তা',
    description: 'শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ, কোনো পরিচয়বহন তথ্য সংরক্ষণ নেই',
  },
  {
    icon: Award,
    title: 'বিশ্বস্ত সাপোর্ট সিস্টেম',
    description: 'মানসম্মত সেবা নিশ্চিত করে দেশের অন্যতম সেরা ১৫ জন ওয়েলনেস এক্সপার্ট',
  },
];

const roadmap = [
  {
    month: '১ম মাস',
    title: 'স্ক্রিনিং',
    sessions: '২টি গ্রুপ সেশন',
    color: 'bg-sage',
  },
  {
    month: '২য় মাস',
    title: 'থেরাপি সেশন',
    sessions: '৬টি গ্রুপ সেশন',
    color: 'bg-coral',
  },
  {
    month: '৩য় মাস',
    title: 'ব্যক্তিগত সাপোর্ট',
    sessions: '২টি গ্রুপ সেশন',
    color: 'bg-teal',
  },
];

const topics = [
  'Relationship Management',
  'Problem Solving and Communication Skills',
  'Lifestyle Management',
  'Time Management for Academic Achievement',
];

export default function CareCohortPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-sage to-teal text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Care Cohort for Students
              </h1>
              <p className="text-white/80 text-lg">
                শিক্ষার্থীদের সামান্য সকল একটি কার্যকর সমাধান
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                কেন Care Cohort প্রয়োজন বোধ করবেন?
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-sage flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-charcoal/60 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                ৩ মাসের প্রোগ্রাম রোডম্যাপ
              </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
              {roadmap.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex-1"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-soft h-full text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-lg">{item.month.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold text-charcoal text-lg mb-2">{item.month}</h3>
                    <p className="text-teal font-medium mb-2">{item.title}</p>
                    <p className="text-charcoal/60 text-sm">{item.sessions}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                Topics Covered
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-gradient-to-br from-sage/10 to-coral/10 rounded-2xl p-8">
                <ul className="space-y-4">
                  {topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-charcoal font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing & Contact */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-teal to-sage text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">প্রাইসিং</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-5xl font-bold mb-2">৩০০০ টাকা</div>
                  <p className="text-white/80 mb-4">৩ মাসের সম্পূর্ণ প্যাকেজ</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• ১০টি গ্রুপ সেশন</li>
                    <li>• স্ক্রিনিং ও অ্যাসেসমেন্ট</li>
                    <li>• ব্যক্তিগত সাপোর্ট</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Phone className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-semibold mb-2">বিস্তারিত জানতে যোগাযোগ করুন</h3>
                <p className="text-3xl font-bold mb-6">০১৭০৬ ৫১৪ ৭৬০</p>
                <p className="text-white/70">(হোয়াটসঅ্যাপ)</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
