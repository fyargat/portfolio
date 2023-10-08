import type { Metadata } from 'next';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
