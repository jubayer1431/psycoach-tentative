import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    text: 'সাইকোচ বাংলাদেশ আমার জীবন বদলে দিয়েছে। আমি দীর্ঘদিন ধরে উদ্বেগে ভুগছিলাম, কিন্তু এখানের থেরাপিস্টদের সাহায্যে আমি অনেক ভালো বোধ করছি।',
    author: 'Anonymous',
    type: 'উদ্বেগ থেরাপি',
  },
  {
    id: 2,
    text: 'অনলাইন থেরাপি সেশনগুলো খুবই সুবিধাজনক। আমি ঘরে বসেই আমার সমস্যার সমাধান পেয়েছি। থেরাপিস্ট খুবই ধৈর্যশীল এবং বোঝার চেষ্টা করেন।',
    author: 'Anonymous',
    type: 'ডিপ্রেশন থেরাপি',
  },
  {
    id: 3,
    text: 'আমার স্ত্রীর সাথে সম্পর্কের সমস্যা ছিল। কাপল থেরাপি সেশনগুলো আমাদের একে অপরকে বুঝতে সাহায্য করেছে। এখন আমরা অনেক সুখী।',
    author: 'Anonymous',
    type: 'কাপল থেরাপি',
  },
  {
    id: 4,
    text: 'আমার ছেলের পড়াশোনায় মনোযোগের সমস্যা ছিল। চাইল্ড থেরাপি সেশনগুলো তার আত্মবিশ্বাস বাড়িয়েছে। শিক্ষকরাও উন্নতি দেখছেন।',
    author: 'Anonymous',
    type: 'চাইল্ড থেরাপি',
  },
  {
    id: 5,
    text: 'DBT প্রোগ্রামটি আমার জন্য অত্যন্ত উপকারী ছিল। আমি এখন আমার আবেগ নিয়ন্ত্রণ করতে পারি এবং স্ট্রেস ম্যানেজ করতে শিখেছি।',
    author: 'Anonymous',
    type: 'DBT প্রোগ্রাম',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-sage/10">
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
            রিভিউস
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            আমাদের ক্লায়েন্টদের অভিজ্ঞতা
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-white border-sage hover:bg-sage hover:text-white shadow-soft"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-white border-sage hover:bg-sage hover:text-white shadow-soft"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -currentIndex * (100 / 3) + '%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ width: `${testimonials.length * 33.33}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-sage rounded-2xl p-6 h-full">
                    <Quote className="w-8 h-8 text-white/40 mb-4" />
                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{testimonial.author}</p>
                        <p className="text-white/60 text-sm">{testimonial.type}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-sage' : 'bg-sage/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
