import { ReactNode } from 'react';
import Navbar from '../../features/navbar/navbar';
import Sidenav from '../../features/sidenav/sidenav';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex h-full">
        <div className="hidden md:block h-full">
          <Sidenav />
        </div>
        <div className="p-0 lg:p-8 w-full">{children}</div>
      </div>
    </div>
  );
}
