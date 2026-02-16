import { motion } from 'framer-motion';
import { Star, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const therapists = [
  {
    id: 1,
    name: 'ড. সায়মা আক্তার',
    title: 'ক্লিনিকাল সাইকোলজিস্ট',
    experience: '১০+ বছর',
    specialization: 'ডিপ্রেশন, উদ্বেগ, ট্রমা',
    rating: 4.9,
    sessions: 500,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'ড. সাদিয়া আফরিন',
    title: 'সিনিয়র সাইকোলজিস্ট',
    experience: '৮+ বছর',
    specialization: 'ট্রমা, পিটিএসডি, গ্রিফ',
    rating: 4.8,
    sessions: 420,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'তাসনিম জাহান',
    title: 'কাউন্সেলিং সাইকোলজিস্ট',
    experience: '৬+ বছর',
    specialization: 'কাপল থেরাপি, সম্পর্ক',
    rating: 4.9,
    sessions: 380,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'ড. রহমান আহমেদ',
    title: 'চাইল্ড সাইকোলজিস্ট',
    experience: '১২+ বছর',
    specialization: 'শিশু মানসিক স্বাস্থ্য, এডিএইচডি',
    rating: 4.7,
    sessions: 600,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'নাজিয়া ইসলাম',
    title: 'ক্লিনিকাল সাইকোলজিস্ট',
    experience: '৭+ বছর',
    specialization: 'ওসিডি, আতঙ্ক, ফোবিয়া',
    rating: 4.8,
    sessions: 350,
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'ফারহানা হক',
    title: 'সাইকোলজিস্ট',
    experience: '৫+ বছর',
    specialization: 'স্ট্রেস ম্যানেজমেন্ট',
    rating: 4.6,
    sessions: 280,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
];

export default function TherapistsPage() {
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
                আমাদের প্রশিক্ষিত থেরাপিস্ট
              </h1>
              <p className="text-charcoal/70 text-lg">
                অভিজ্ঞ ও প্রশিক্ষিত সাইকোলজিস্টদের সাথে আপনার মানসিক স্বাস্থ্যের যাত্রা শুরু করুন
              </p>
            </motion.div>
          </div>
        </section>

        {/* Therapists Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {therapists.map((therapist, index) => (
                <motion.div
                  key={therapist.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
                >
                  {/* Profile Image */}
                  <div className="relative mb-4 flex justify-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-red-400">
                      <img
                        src={therapist.image}
                        alt={therapist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-charcoal text-lg">{therapist.name}</h3>
                    <p className="text-teal text-sm font-medium">{therapist.title}</p>
                    <div className="flex items-center justify-center gap-4 mt-2 text-sm text-charcoal/60">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        {therapist.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {therapist.sessions} সেশন
                      </span>
                    </div>
                  </div>

                  {/* Training Details */}
                  <div className="bg-sage/20 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-teal" />
                      <span className="text-sm font-medium text-charcoal">ট্রেনিং ডিটেইলস</span>
                    </div>
                    <p className="text-sm text-charcoal/70">অভিজ্ঞতা: {therapist.experience}</p>
                    <p className="text-sm text-charcoal/70">বিশেষজ্ঞ: {therapist.specialization}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-charcoal font-semibold rounded-full px-8 py-6 text-lg shadow-soft hover:shadow-card transition-all hover:scale-105"
              >
                আপনার সেশন বুক করুন
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
