import localFont from "next/font/local";
import "./globals.css";

const franksRus = localFont({
  src: "../public/Fonts/FranksRus-Regular_0.otf",
  variable: "--font-franks-rus",
  weight: "400",
});

export const metadata = {
  title: "База отдыха Луна №50 - Горный Алтай | Уютный отдых в горах",
  description: "Уютный отдых в горах Алтая. Комфортные домики, бассейн, баня и живописная природа.",
  keywords: "база отдыха, Горный Алтай, село Ая, отдых в горах, домики, бассейн, баня, Катунь",
  openGraph: {
    title: "База отдыха Луна №50 - Горный Алтай",
    description: "Уютный отдых в горах Алтая. Комфортные домики, бассейн, баня и живописная природа.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${franksRus.variable} antialiased`}
        style={{ fontFamily: 'FranksRus, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
