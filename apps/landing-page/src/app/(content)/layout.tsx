import React from 'react';
import Banner from '../../components/banner';
import { Navbar } from '../../navbar';
import { Footer } from '../../footer';

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'flex flex-col min-h-screen'}>
      <Banner />
      <Navbar />
      <div className={'flex-1'}>{children}</div>
      <Footer />
    </div>
  );
}
