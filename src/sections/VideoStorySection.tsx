import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function VideoStorySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-sage/10 to-coral/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            আমাদের গল্প দেখুন
          </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
            আমরা কেন মানসিক স্বাস্থ্য সেবায় নিয়োজিত এবং আমাদের লক্ষ্য কী
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card bg-charcoal/5">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=675&fit=crop"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-card transition-colors"
                  >
                    <Play className="w-8 h-8 lg:w-10 lg:h-10 text-teal ml-1" fill="currentColor" />
                  </motion.button>
                </div>
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-charcoal">ইন্ট্রো ভিডিও</span>
                </div>
              </>
            ) : (
              <>
                {/* Video Player (Simulated) */}
                <div className="w-full h-full bg-charcoal flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-lg mb-4">ভিডিও প্লেয়ার</p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                      বন্ধ করুন
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-10 text-center"
        >
          <p className="text-charcoal/80 text-lg leading-relaxed">
            সাইকোচ বাংলাদেশ-এর মিশন হলো সবার জন্য মানসম্মত মানসিক স্বাস্থ্য সেবা সুলভ করা। 
            আমরা বিশ্বাস করি যে সঠিক পরামর্শ ও প্রশিক্ষণের মাধ্যমে প্রত্যেক মানুষ 
            তার মানসিক স্বাস্থ্য উন্নয়ন করতে পারে।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
