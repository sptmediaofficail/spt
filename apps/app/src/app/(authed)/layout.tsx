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
      <div className="flex">
        <div className="hidden md:block">
          <Sidenav />
        </div>
        {/* Set background based on the current path */}
        <div
          className={`w-full flex flex-col gap-4 lg:p-8
          min-h-[calc(100vh-4rem-1px)]
          ${isHome ? 'bg-white p-0' : 'bg-[#fafbfc] p-4'}`}
        >
          {/*  className={`p-0 lg:p-8 w-full overflow-y-scroll ${*/}
          {/*    isHome ? 'bg-white' : 'bg-[#fafbfc]'*/}
          {/*  }`}*/}
          {/*>*/}
          {children}
        </div>
      </div>
    </div>
  );
}
