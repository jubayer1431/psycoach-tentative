import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const therapists = [
  {
    id: 1,
    name: 'ড. সায়মা আক্তার',
    title: 'ক্লিনিকাল সাইকোলজিস্ট',
    experience: '১০+ বছরের অভিজ্ঞতা',
    specialization: 'ডিপ্রেশন, উদ্বেগ',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'ড. সাদিয়া আফরিন',
    title: 'সিনিয়র সাইকোলজিস্ট',
    experience: '৮+ বছরের অভিজ্ঞতা',
    specialization: 'ট্রমা, পিটিএসডি',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'তাসনিম জাহান',
    title: 'কাউন্সেলিং সাইকোলজিস্ট',
    experience: '৬+ বছরের অভিজ্ঞতা',
    specialization: 'কাপল থেরাপি',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'ড. রহমান আহমেদ',
    title: 'চাইল্ড সাইকোলজিস্ট',
    experience: '১২+ বছরের অভিজ্ঞতা',
    specialization: 'শিশু মানসিক স্বাস্থ্য',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'নাজিয়া ইসলাম',
    title: 'ক্লিনিকাল সাইকোলজিস্ট',
    experience: '৭+ বছরের অভিজ্ঞতা',
    specialization: 'ওসিডি, আতঙ্ক',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop',
  },
];

export default function TherapistCarouselSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkScrollability);
      return () => scrollEl.removeEventListener('scroll', checkScrollability);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-cream/50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-2">
              আমাদের এক্সপার্ট থেরাপিস্ট
            </h2>
            <p className="text-charcoal/60">
              অভিজ্ঞ ও প্রশিক্ষিত সাইকোলজিস্টদের সাথে আপনার যাত্রা শুরু করুন
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="rounded-full border-sage hover:bg-sage hover:text-white disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="rounded-full border-sage hover:bg-sage hover:text-white disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {therapists.map((therapist, index) => (
            <motion.div
              key={therapist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-72 snap-start"
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 cursor-pointer group">
                {/* Profile Image */}
                <div className="relative mb-4">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-sage/20 group-hover:border-sage transition-colors">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-1/2 translate-x-8 bg-sage text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {therapist.rating}
                  </div>
                </div>
                
                {/* Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-charcoal text-lg mb-1">{therapist.name}</h3>
                  <p className="text-teal text-sm font-medium mb-1">{therapist.title}</p>
                  <p className="text-charcoal/60 text-sm mb-2">{therapist.experience}</p>
                  <p className="text-charcoal/50 text-xs">{therapist.specialization}</p>
                </div>
                
                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full mt-4 border-sage text-teal hover:bg-sage hover:text-white rounded-full text-sm"
                >
                  বিস্তারিত দেখুন
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
