'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  const isHome = usePathname() === '/';
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* на внутренних страницах — отступ под плавающее меню */}
      <main className={isHome ? '' : 'pt-14'}>{children}</main>
      <Footer />
    </div>
  );
}
