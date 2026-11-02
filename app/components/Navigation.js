'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import LogoMark from './LogoMark';

const columns = [
  {
    title: 'База',
    items: [
      { href: '/', label: 'Главная' },
      { href: '/services', label: 'Услуги и проживание' },
      { href: '/gallery', label: 'Фотогалерея' },
    ],
  },
  {
    title: 'На территории',
    items: [
      { href: '/#services', label: 'Бассейн с подогревом' },
      { href: '/#services', label: 'Русская баня' },
      { href: '/#services', label: 'Питание и беседки' },
      { href: '/#services', label: 'Развлечения рядом' },
    ],
  },
  {
    title: 'Гостям',
    items: [
      { href: '/faq', label: 'Частые вопросы' },
      { href: '/contacts', label: 'Как добраться' },
      { href: '/contacts', label: 'Контакты' },
    ],
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Плавающая панель */}
      <header className="fixed top-3 sm:top-4 inset-x-3 sm:inset-x-8 z-40">
        <div
          className={`grid grid-cols-[1fr_auto_1fr] items-center h-14 px-3 sm:px-5 rounded-xl border text-white transition-colors duration-500 backdrop-blur-md ${
            onHero ? 'bg-black/35 border-white/10' : 'bg-[#2A2A28]/95 border-black/10 shadow-lg shadow-black/10'
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 justify-self-start">
            <LogoMark className="w-8 h-8 text-white" title="Луна №50" />
            <span className="hidden sm:block text-[13px] tracking-[0.32em] uppercase font-light">Луна №50</span>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] font-medium hover:opacity-80"
            aria-label="Открыть меню"
          >
            <Menu className="w-4 h-4" /> Меню
          </button>

          <div className="flex items-center gap-4 justify-self-end">
            <a href="tel:+79628075050" className="hidden md:block text-[14px] font-medium">+7 (962) 807-50-50</a>
            <a href="tel:+79628075050" className="md:hidden" aria-label="Позвонить"><Phone className="w-5 h-5" /></a>
            <Link href="/contacts" className="hidden sm:block rounded-[10px] bg-olive-600 hover:bg-olive-700 px-4 py-2.5 text-[13px] font-medium transition-colors">
              Забронировать
            </Link>
          </div>
        </div>
      </header>

      {/* Раскрытое меню */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-3 sm:top-4 inset-x-3 sm:inset-x-8 max-h-[calc(100svh-24px)] overflow-y-auto rounded-2xl bg-[#F3F1EC] text-[#2A2A28] p-6 sm:p-10 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-6'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2.5 text-[13px] tracking-[0.32em] uppercase"><LogoMark className="w-7 h-7 text-olive-700" /> Луна №50</span>
            <button onClick={() => setOpen(false)} className="flex items-center gap-2 text-[13px] uppercase tracking-[0.12em]">
              <X className="w-4 h-4" /> Закрыть
            </button>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[12px] uppercase tracking-[0.18em] text-warm-500">{col.title}</p>
                <ul className="mt-4 grid gap-2.5">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className={`text-2xl font-light tracking-[-0.02em] transition-opacity hover:opacity-60 ${pathname === it.href ? 'text-olive-600' : ''}`}
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-black/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px]">
            <a href="tel:+79628075050" className="font-medium">+7 (962) 807-50-50</a>
            <span className="text-warm-500">село Ая, ул. Советская, 50</span>
            <Link href="/contacts" onClick={() => setOpen(false)} className="sm:ml-auto rounded-[10px] bg-olive-600 hover:bg-olive-700 px-5 py-3 text-white font-medium">
              Забронировать
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
