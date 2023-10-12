import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import '@/styles/index.scss';

const cabin = Cabin({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fyargat Bikbaev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cabin.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
