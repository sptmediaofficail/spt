import { cn } from '@nextui-org/theme';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={cn('bg-primary w-screen h-screen')}>{children}</div>;
}
