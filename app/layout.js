import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "База отдыха Луна №50 - Горный Алтай | Уютный отдых в горах",
  description: "База отдыха Луна №50 в селе Ая, Горный Алтай. Уютные домики, бассейн с подогревом, русская баня. Комфортный отдых на берегу реки Катунь среди живописных гор.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
