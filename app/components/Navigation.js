'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/gallery', label: 'Фотогалерея' },
  { href: '/faq', label: 'Частые вопросы' },
  { href: '/contacts', label: 'Контакты' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navSolid = scrolled || !isHome;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navSolid
            ? 'glass border-b border-black/5 py-0'
            : 'bg-transparent border-b border-transparent py-1'
        }`}
      >
        <div className="container-width">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
                <Image
                  src="/image/logo.png"
                  alt="Луна №50"
                  width={44}
                  height={44}
                  className={`object-contain transition-all ${navSolid ? '' : 'brightness-0 invert'}`}
                />
                <span
                  className={`text-lg font-semibold tracking-tight transition-colors ${
                    navSolid ? 'text-foreground' : 'text-white'
                  }`}
                >
                  Луна №50
                </span>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? navSolid
                          ? 'bg-forest/10 text-forest'
                          : 'bg-white/20 text-white backdrop-blur-sm'
                        : navSolid
                          ? 'text-foreground/70 hover:text-foreground hover:bg-black/5'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+79628075050"
                className={`hidden xl:flex items-center gap-2 text-sm font-medium transition-colors ${
                  navSolid ? 'text-foreground/70 hover:text-foreground' : 'text-white/90 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                +7 (962) 807-50-50
              </a>
              <Link
                href="/contacts"
                className={`btn text-sm !py-2.5 !px-5 ${
                  navSolid ? 'bg-forest text-white hover:bg-forest-dark shadow-lg shadow-forest/20' : 'bg-white text-forest hover:bg-white/90'
                }`}
              >
                Забронировать
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-full transition-colors ${
                navSolid
                  ? 'text-foreground hover:bg-black/5'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Меню"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[min(100%,320px)] bg-cream shadow-2xl flex flex-col"
            >
              <div className="p-6 pt-20 flex-1 overflow-y-auto">
                <nav className="space-y-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3.5 rounded-2xl text-base font-medium transition-colors ${
                          pathname === item.href
                            ? 'bg-forest/10 text-forest'
                            : 'text-foreground/80 hover:bg-black/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-black/10 space-y-4">
                  <a href="tel:+79628075050" className="flex items-center gap-3 text-foreground/80">
                    <Phone className="w-5 h-5 text-forest" />
                    <span className="font-medium">+7 (962) 807-50-50</span>
                  </a>
                  <Link href="/contacts" className="btn w-full bg-forest text-white hover:bg-forest-dark shadow-lg shadow-forest/20">
                    Забронировать домик
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
