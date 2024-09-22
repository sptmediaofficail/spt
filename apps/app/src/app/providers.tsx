'use client';
import { NextUIProvider } from '@nextui-org/system';
import { ReactNode } from 'react';

export const UIProvider = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) => {
  return <NextUIProvider locale={locale}>{children}</NextUIProvider>;
};
