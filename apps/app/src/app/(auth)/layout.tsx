import { cn } from '@nextui-org/theme';
import { ReactNode } from 'react';
import Image from 'next/image';
import BGMobile from '../../assets/mobile-auth-background.svg';
import BGDesktop from '../../assets/logo-backgroud-desktop.svg';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'relative w-screen h-screen',
        'bg-[#1d2d56] lg:bg-[#041643]'
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={BGMobile}
          alt="Logo White"
          className="opacity-100 lg:opacity-0 absolute transform w-full"
          style={{ pointerEvents: 'none' }}
        />

        <Image
          src={BGDesktop}
          alt="Background Desktop"
          className="opacity-0 lg:opacity-100 absolute top-1/2 h-full transform -translate-y-1/2"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      <div
        className={cn(
          'relative z-10 w-full h-full flex',
          'items-end lg:items-center lg:w-1/2 lg:mr-auto justify-center'
        )}
      >
        {children}
      </div>
    </div>
  );
}
