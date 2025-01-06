import './global.css';
import { layoutMetadata, shubakFont } from '@spt/common';
import {
  getLocale,
  getMessages,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { I18nProvider, UIProvider } from './providers';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
// import Navbar from '../features/navbar/navbar';
// import Sidenav from '../features/sidenav/sidenav';

export const metadata = layoutMetadata;
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  unstable_setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${shubakFont.className}`}
    >
      <body className="">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <UIProvider locale={locale}>
          <I18nProvider messages={messages} locale={locale}>
            <Toaster />
            {/*<Navbar />*/}
            {/*<div className="hidden md:block">*/}
            {/*  <Sidenav />*/}
            {/*</div>*/}
            {children}
          </I18nProvider>
        </UIProvider>
      </body>
    </html>
  );
}
