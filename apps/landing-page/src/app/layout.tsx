import './global.css';
import React from 'react';
import { Providers } from './providers';
import localFont from 'next/font/local';

export const metadata = {
  title: 'SPT',
  description: 'SPT',
};

const shubakFont = localFont({
  src: [
    {
      path: '../assets/fonts/Shubbak-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/Shubbak-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/Shubbak-SemiBold.woff2',
      style: 'normal',
      weight: '600',
    },
  ],
  variable: '--font-shubak',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${shubakFont.className}`} dir="rtl">
      <body>
        <Providers>
          <main className="w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
