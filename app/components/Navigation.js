'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/gallery', label: 'Фотогалерея' },
  { href: '/services', label: 'Услуги и сервис' },
  { href: '/faq', label: 'Частые вопросы' },
  { href: '/contacts', label: 'Контакты' },
  
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Barnaul'
      });
      const dateString = now.toLocaleDateString('ru-RU', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        timeZone: 'Asia/Barnaul'
      });
      setCurrentTime(`${timeString}, ${dateString}`);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                <Image
                  src="/image/logo.png"
                  alt="логотип"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 via-blue-600 to-slate-600 bg-clip-text text-transparent">
                 -
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-700 font-medium'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-white/50'
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>+7 (962) 807-50-50</span>
              </div>
            </div>

{/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Expandable Menu (Desktop & Mobile) */}
        {isOpen && (
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="overflow-hidden glass border-t border-white/20"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-700 font-medium'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
            <div className="pt-4 border-t border-white/20">
              {/* Widgets */}
              <div className="grid grid-cols-1 gap-3 mb-4">
                {/* Time Widget */}
                <div className="glass p-3 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2 text-sky-600 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">Местное время</span>
                  </div>
                  <p className="text-slate-800 font-medium text-sm">
                    {currentTime || 'Загрузка...'}
                  </p>
                </div>

                {/* Location Widget */}
                <div className="glass p-3 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">Расположение</span>
                  </div>
                  <p className="text-slate-800 font-medium text-sm mb-2">
                    Село Ая, ул. Советская 50
                  </p>
                  <motion.a
                    href="https://yandex.ru/maps/11235/altai-krai/house/sovetskaya_ulitsa_50/bEwYfgZkSEYAQFtrfXV1dHxkYg==/?ll=85.815381%2C51.944491&z=16.6"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-3 py-2 rounded-lg text-xs font-medium"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Показать на карте
                  </motion.a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+7 (962) 807-50-50</span>
              </div>
             
            </div>
          </div>
        </motion.div>
        )}
      </motion.nav>
    </>
  );
}
