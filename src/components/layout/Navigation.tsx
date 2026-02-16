import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'হোম পেজ', href: '/' },
  {
    label: 'আমাদের এক্সপার্ট',
    href: '/therapists',
    dropdown: [
      { label: 'ক্লিনিকাল সাইকোলজিস্ট', href: '/therapists' },
      { label: 'সাইকোলজিস্ট', href: '/therapists' },
    ],
  },
  {
    label: 'ট্রিটমেন্ট প্যাকেজ',
    href: '/packages',
    dropdown: [
      { label: 'সেলফ হেল্প প্যাকেজ', href: '/self-help' },
      { label: 'ডি বি টি প্যাকেজ', href: '/dbt' },
      { label: 'এসেসমেন্ট প্যাকেজ', href: '/assessment' },
      { label: 'ডুয়াল ওয়েলনেস প্যাকেজ', href: '/packages' },
    ],
  },
  {
    label: 'কমিউনিটি ও রিসার্চ',
    href: '/summer-challenge',
    dropdown: [
      { label: 'সাইকো সামার চ্যালেঞ্জ', href: '/summer-challenge' },
      { label: 'কেয়ার কোহোর্ট', href: '/care-cohort' },
      { label: 'কর্পোরেট প্যাকেজ', href: '/corporate' },
      { label: 'রিসার্চ', href: '/about' },
    ],
  },
  {
    label: 'নিজেকে জানি',
    href: '/self-help',
    dropdown: [
      { label: 'সেলফ এসেসমেন্ট', href: '/self-help' },
      { label: 'আর্টিকেলস', href: '/about' },
    ],
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-teal flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-charcoal">Psycoach</span>
              <span className="text-sm text-teal block -mt-1">Bangladesh</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-teal bg-sage/10'
                      : 'text-charcoal/80 hover:text-teal hover:bg-sage/5'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-card border border-sage/20 overflow-hidden"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-charcoal/80 hover:bg-sage/10 hover:text-teal transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-coral hover:bg-coral/90 text-charcoal font-medium rounded-full px-6 shadow-soft hover:shadow-card transition-all hover:scale-105"
            >
              এখনই থেরাপি সেশন বুক করুন
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-sage/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-sage/20"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive(item.href)
                        ? 'text-teal bg-sage/10'
                        : 'text-charcoal/80 hover:bg-sage/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm text-charcoal/60 hover:bg-sage/5"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                className="w-full mt-4 bg-coral hover:bg-coral/90 text-charcoal font-medium rounded-full"
              >
                এখনই থেরাপি সেশন বুক করুন
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
