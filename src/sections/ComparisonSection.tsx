import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonPoints = [
  {
    feature: 'ইনস্ট্যান্ট অনলাইন বুকিং',
    psycoach: true,
    traditional: false,
  },
  {
    feature: 'যাচাইকৃত ক্লিনিকাল সাইকোলজিস্ট',
    psycoach: true,
    traditional: false,
  },
  {
    feature: 'নমনীয় সময়সূচি',
    psycoach: true,
    traditional: false,
  },
  {
    feature: 'অ্যানোনিমাস অপশন',
    psycoach: true,
    traditional: false,
  },
  {
    feature: 'সাশ্রয়ী মূল্যের প্যাকেজ',
    psycoach: true,
    traditional: false,
  },
  {
    feature: 'টেক্সট-বেইজড সাপোর্ট',
    psycoach: true,
    traditional: false,
  },
  {
    feature: 'গ্রুপ থেরাপি সেশন',
    psycoach: true,
    traditional: true,
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            সাইকোচ বাংলাদেশ বনাম ট্র্যাডিশনাল থেরাপি
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            কেন আমরা ভিন্ন এবং কেন আমরা আপনার জন্য সেরা পছন্দ
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-sage to-teal text-white">
              <div className="p-4 lg:p-6 font-semibold text-sm lg:text-base">বৈশিষ্ট্য</div>
              <div className="p-4 lg:p-6 font-semibold text-sm lg:text-base text-center bg-white/10">
                সাইকোচ বাংলাদেশ
              </div>
              <div className="p-4 lg:p-6 font-semibold text-sm lg:text-base text-center">
                ট্র্যাডিশনাল
              </div>
            </div>
            
            {/* Rows */}
            {comparisonPoints.map((point, index) => (
              <motion.div
                key={point.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-cream/30' : 'bg-white'}`}
              >
                <div className="p-4 lg:p-5 text-sm lg:text-base text-charcoal border-r border-sage/10">
                  {point.feature}
                </div>
                <div className="p-4 lg:p-5 flex justify-center items-center border-r border-sage/10 bg-sage/5">
                  {point.psycoach ? (
                    <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-charcoal/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-charcoal/40" />
                    </div>
                  )}
                </div>
                <div className="p-4 lg:p-5 flex justify-center items-center">
                  {point.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-charcoal/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-charcoal/40" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
