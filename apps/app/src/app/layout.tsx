import './global.css';
import { layoutMetadata, shubakFont } from '@spt/common';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { UIProvider } from './providers';
import { ReactNode } from 'react';

export const metadata = layoutMetadata;
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${shubakFont.className}`}
    >
      <body className="w-screen h-screen">
        <UIProvider locale={locale}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </UIProvider>
      </body>
    </html>
  );
}
