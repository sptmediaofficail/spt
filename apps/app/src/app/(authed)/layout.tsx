'use client';

import { ReactNode } from 'react';
import Navbar from '../../features/navbar/navbar';
import Sidenav from '../../features/sidenav/sidenav';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/home';

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex h-full">
        <div className="hidden md:block h-full">
          <Sidenav />
        </div>
        {/* Set background based on the current path */}
        <div
          className={`p-0 lg:p-8 w-full overflow-y-scroll h-[calc(100dvh-4rem-1px)] ${
            isHome ? 'bg-white' : 'bg-[#fafbfc]'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
