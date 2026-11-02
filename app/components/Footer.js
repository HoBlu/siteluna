import Link from 'next/link';
import { ArrowUpRight, Instagram, MessageCircle, Send } from 'lucide-react';
import LogoMark from './LogoMark';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги' },
  { href: '/gallery', label: 'Фотогалерея' },
  { href: '/faq', label: 'Частые вопросы' },
  { href: '/contacts', label: 'Контакты' },
];

const socials = [
  { href: 'https://www.instagram.com/luna50.altai', label: 'Instagram', icon: Instagram },
  { href: 'https://api.whatsapp.com/send/?phone=79628075050', label: 'WhatsApp', icon: MessageCircle },
  { href: 'https://t.me/luna50_altai', label: 'Telegram', icon: Send },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-3 sm:px-8 pb-3 sm:pb-4 pt-16">
      <div className="rounded-2xl bg-[#2A2A28] text-white overflow-hidden">
        {/* Призыв */}
        <div className="px-6 sm:px-12 pt-12 sm:pt-16 pb-10 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end border-b border-white/10">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-white/50">Бронирование</p>
            <h2 className="mt-4 text-white text-4xl sm:text-5xl xl:text-6xl leading-[1.05]">
              Ждём вас <span className="italic">на Алтае</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <a href="tel:+79628075050" className="rounded-[10px] bg-olive-600 hover:bg-olive-500 px-6 py-4 text-[15px] font-medium transition-colors text-center">
              +7 (962) 807-50-50
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=79628075050"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] border border-white/20 hover:bg-white/10 px-6 py-4 text-[15px] font-medium transition-colors flex items-center justify-center gap-2"
            >
              Написать в WhatsApp <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Колонки */}
        <div className="px-6 sm:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-[14px]">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <LogoMark className="w-10 h-10 text-white" />
              <span className="text-[13px] tracking-[0.32em] uppercase font-light">Луна №50</span>
            </div>
            <p className="mt-4 text-white/60 leading-relaxed max-w-xs">
              Уютный семейный отдых в горах Алтая: домики, бассейн с подогревом, баня и природа Катуни.
            </p>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-4">Разделы</p>
            <ul className="grid gap-2.5">
              {links.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-white/80 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-4">Контакты</p>
            <ul className="grid gap-2.5 text-white/80">
              <li><a href="tel:+79628075050" className="hover:text-white">+7 (962) 807-50-50</a></li>
              <li><a href="mailto:luna50.altai@yandex.ru" className="hover:text-white break-all">luna50.altai@yandex.ru</a></li>
              <li>Республика Алтай, село Ая,<br />ул. Советская, 50</li>
              <li className="text-white/50">Круглосуточно, 7 дней в неделю</li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-4">Мы в соцсетях</p>
            <ul className="grid gap-2.5">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-white/80 hover:text-white transition-colors">
                    <span className="grid place-items-center w-8 h-8 rounded-full border border-white/15"><Icon className="w-4 h-4" /></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-6 sm:px-12 py-5 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-[13px] text-white/40">
          <span>© {year} База отдыха «Луна №50»</span>
          <span>Горный Алтай · село Ая</span>
        </div>
      </div>
    </footer>
  );
}
