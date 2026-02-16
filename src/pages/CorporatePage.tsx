import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Brain, Users, Moon, Scale, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const stats = [
  { label: 'WHO Recognized', value: 'Burnout is an occupational phenomenon (ICD-11)' },
  { label: 'Global Cost', value: '$3 Trillion/year in lost productivity' },
  { label: 'Labor Spill', value: '$5+ Million/year for 1000-person company' },
  { label: 'Presenteeism', value: '89% of costs from disengaged work' },
];

const solutions = [
  {
    icon: Brain,
    title: 'COGNITIVE RESILIENCE TRAINING',
    subtitle: 'PSYCHOLOGICAL SAFETY AUDITS',
    features: ['Stress management', 'Emotional regulation', 'Team building'],
  },
  {
    icon: Users,
    title: 'MANAGERIAL MENTAL HEALTH FIRST AID',
    subtitle: 'Leadership Training',
    features: ['Culture assessment', 'Spotting burnout signs', 'Crisis response'],
  },
  {
    icon: Moon,
    title: 'SLEEP & CIRCADIAN OPTIMIZATION',
    subtitle: 'Biological Recovery',
    features: ['Sleep hygiene', 'Shift worker support', 'Recovery protocols'],
  },
];

const benefits = [
  'Anonymized Data Insights',
  'Clinical Lead',
  'Seamless Integration',
  'Evidence-based Programs',
];

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-teal/30" />
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  PSYCHOLOGICAL FORTITUDE FOR THE MODERN WORKFORCE
                </h1>
                <p className="text-white/70 text-lg mb-8">
                  Evidence-based wellness programs designed to eliminate burnout, reduce turnover, and drive 4x ROI on human capital
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-coral hover:bg-coral/90 text-charcoal font-semibold rounded-full px-8"
                  >
                    Download Our Impact Report
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-charcoal font-semibold rounded-full px-8"
                  >
                    Request a Strategy Consultation
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Corporate team meeting"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Burnout Epidemic Section */}
        <section className="py-16 lg:py-24 bg-charcoal text-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                THE BURNOUT EPIDEMIC: A STRUCTURAL BUSINESS RISK
              </h2>
            </motion.div>

            {/* Graph Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/5 rounded-2xl p-8">
                <div className="flex justify-around items-end h-48 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <TrendingUp className="w-12 h-12 text-red-400" />
                    <div className="w-20 h-32 bg-red-400/20 rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full h-3/4 bg-red-400/40 rounded-t-lg" />
                    </div>
                    <span className="text-sm text-white/70">Absenteeism</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <TrendingUp className="w-12 h-12 text-red-400" />
                    <div className="w-20 h-40 bg-red-400/20 rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full h-full bg-red-400/40 rounded-t-lg" />
                    </div>
                    <span className="text-sm text-white/70">Turnover</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <TrendingDown className="w-12 h-12 text-sage" />
                    <div className="w-20 h-24 bg-sage/20 rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full h-1/2 bg-sage/40 rounded-t-lg" />
                    </div>
                    <span className="text-sm text-white/70">Productivity</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <TrendingDown className="w-12 h-12 text-sage" />
                    <div className="w-20 h-20 bg-sage/20 rounded-t-lg relative">
                      <div className="absolute bottom-0 w-full h-1/3 bg-sage/40 rounded-t-lg" />
                    </div>
                    <span className="text-sm text-white/70">Engagement</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6"
                >
                  <p className="text-sage font-semibold mb-2">{stat.label}</p>
                  <p className="text-white/80 text-sm">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Solutions */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Clinical Solutions
              </h2>
              <p className="text-charcoal/60">Evidence-based programs tailored for your organization</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-8 shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-sage flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-sage/20 text-teal text-xs font-medium rounded-full mb-4">
                    Evidence-based
                  </span>
                  <h3 className="font-bold text-charcoal text-lg mb-2">{solution.title}</h3>
                  <p className="text-charcoal/60 text-sm mb-4">{solution.subtitle}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-charcoal/70">
                        <CheckCircle className="w-4 h-4 text-sage" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* JD-R Model */}
        <section className="py-16 lg:py-24 bg-cream/50">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">
                  BALANCING PRESSURE WITH SUPPORT
                </h2>
                <p className="text-charcoal/70 mb-6">
                  Job Demands-Resources Model অনুসারে, কর্মচারীদের কর্মক্ষমতা বাড়াতে 
                  চাপের (Demands) সাথে সাপোর্ট (Resources) এর ভারসাম্য রাখা জরুরি।
                </p>
                <div className="flex items-center justify-center">
                  <Scale className="w-32 h-32 text-sage" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <h3 className="font-bold text-charcoal text-xl mb-6">WHY HR PARTNERS WITH US</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-charcoal font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
