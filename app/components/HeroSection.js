'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { title: 'Бассейн с подогревом', text: 'Взрослая чаша 12×16 м и отдельная детская — 0,45 м', img: '/image/2.1.jpg' },
  { title: 'Русская баня', text: 'Прогрев, веники и комната отдыха', img: '/image/Бани/Баня1.jpg' },
  { title: 'Уютные домики', text: '20 м², тёплый пол, кондиционер, места для детей', img: '/image/1.3.jpg' },
];

const cards = [
  { title: 'Проживание', img: '/image/3.2.jpg', href: '/services' },
  { title: 'Куда съездить рядом', img: '/image/Локации/Локации1.jpg', href: '/#services' },
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const s = slides[slide];

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white">
      <video autoPlay muted loop playsInline poster="/image/1.3.jpg" className="absolute inset-0 w-full h-full object-cover">
        <source src="/image/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="relative z-10 min-h-[100svh] px-4 sm:px-8 pt-28 pb-6 grid lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_600px] gap-8 items-end">
        {/* Заголовок и быстрая заявка */}
        <div className="max-w-[720px]">
          <h1 className="text-white text-[2.15rem] leading-[1.08] sm:text-6xl xl:text-[4.7rem] tracking-[-0.02em]">
            Семейный отдых<br /><span className="italic">на берегу Катуни</span>
          </h1>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-white/85 max-w-[520px]">
            Тёплые домики, бассейн с детской чашей и русская баня в селе Ая. Тишина, горы и всё, чтобы отдыхать всей семьёй круглый год.
          </p>

        </div>

        {/* Промо-карточки */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/#services" className="relative col-span-2 h-[280px] xl:h-[340px] rounded-xl overflow-hidden group">
            {slides.map((sl, i) => (
              <Image
                key={sl.img}
                src={sl.img}
                alt={sl.title}
                fill
                priority={i === 0}
                sizes="(max-width:1024px) 100vw, 600px"
                className={`object-cover transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
            <div className="absolute top-3 inset-x-4 flex gap-1.5">
              {slides.map((_, i) => <span key={i} className={`h-[2px] flex-1 rounded ${i === slide ? 'bg-white' : 'bg-white/35'}`} />)}
            </div>
            <div className="absolute top-7 inset-x-4 flex justify-between gap-4">
              <p className="text-[13px] uppercase tracking-[0.08em] font-medium">{s.title}</p>
              <ArrowUpRight className="w-6 h-6 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="absolute bottom-4 inset-x-4 flex items-end justify-between gap-4">
              <p className="text-[14px] text-white/90 max-w-[340px]">{s.text}</p>
              <div className="flex gap-1 shrink-0">
                <button
                  onClick={(e) => { e.preventDefault(); setSlide((slide - 1 + slides.length) % slides.length); }}
                  className="p-1.5 rounded-full hover:bg-white/15"
                  aria-label="Предыдущий слайд"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.preventDefault(); setSlide((slide + 1) % slides.length); }}
                  className="p-1.5 rounded-full hover:bg-white/15"
                  aria-label="Следующий слайд"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Link>

          {cards.map((c) => (
            <Link key={c.title} href={c.href} className="relative h-[150px] sm:h-[170px] xl:h-[190px] rounded-xl overflow-hidden group">
              <Image src={c.img} alt={c.title} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-transparent" />
              <p className="absolute top-3 left-4 right-10 text-[12px] sm:text-[13px] uppercase tracking-[0.08em] font-medium">{c.title}</p>
              <ArrowUpRight className="absolute top-3 right-3 w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
