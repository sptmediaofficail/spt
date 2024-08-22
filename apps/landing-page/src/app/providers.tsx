'use client';
import { NextUIProvider } from '@nextui-org/system';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export const Providers = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
