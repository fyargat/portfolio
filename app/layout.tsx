import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import '@/styles/index.scss';

import { AppProvider } from '@/providers';
import Favicon from '@/public/images/metadata/favicon.ico';

const cabin = Cabin({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fyargat Bikbaev',
  description: 'Fyargat Bikbaev portfolio',
  icons: [{ rel: 'icon', type: 'image/x-icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cabin.className}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
