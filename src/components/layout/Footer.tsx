import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const quickLinks = [
  { label: 'হোম পেজ', href: '/' },
  { label: 'আমাদের এক্সপার্ট', href: '/therapists' },
  { label: 'ট্রিটমেন্ট প্যাকেজ', href: '/packages' },
  { label: 'সেলফ হেল্প', href: '/self-help' },
  { label: 'ডি বি টি প্যাকেজ', href: '/dbt' },
  { label: 'আমাদের সম্পর্কে', href: '/about' },
];

const programs = [
  { label: 'সাইকো সামার চ্যালেঞ্জ', href: '/summer-challenge' },
  { label: 'কেয়ার কোহোর্ট', href: '/care-cohort' },
  { label: 'কর্পোরেট প্যাকেজ', href: '/corporate' },
  { label: 'এসেসমেন্ট প্যাকেজ', href: '/assessment' },
];

export default function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-semibold">Psycoach</span>
                <span className="text-sm text-white/70 block -mt-1">Bangladesh</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              সবার ক্লিনিকাল সাইকোলজিস্টদের সাথে মানসিক স্বাস্থ্য সেবা। সারাদেশে আধুনিক ও মানসম্মত মানসিক স্বাস্থ্য সেবা।
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">প্রোগ্রামসমূহ</h4>
            <ul className="space-y-2">
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">যোগাযোগ</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4" />
                <span>০১৭০৬ ৫১৪ ৭৬০</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4" />
                <span>info@psycoachbd.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4" />
                <span>ঢাকা, বাংলাদেশ</span>
              </div>
            </div>

            <h4 className="font-semibold text-lg mb-3">নিউজলেটার</h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="আপনার ইমেইল"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm"
              />
              <Button className="bg-coral hover:bg-coral/90 text-charcoal shrink-0">
                সাবস্ক্রাইব
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © ২০২৫ Psycoach Bangladesh. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link to="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</Link>
            <Link to="#" className="hover:text-white transition-colors">টার্মস অফ সার্ভিস</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
