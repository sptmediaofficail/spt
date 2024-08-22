import './global.css';
import React from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'SPT',
  description: 'SPT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
