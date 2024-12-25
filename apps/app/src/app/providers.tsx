'use client';
import { NextUIProvider } from '@nextui-org/system';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OpenAPI } from '@spt/api-sdk';
import { useRouter } from 'next/navigation';
import { envSchema } from '../env';
import {
  AbstractIntlMessages,
  IntlError,
  NextIntlClientProvider,
} from 'next-intl';

OpenAPI.BASE = envSchema.NEXT_PUBLIC_API_URL;

export const UIProvider = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <NextUIProvider navigate={useRouter} locale={locale}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextUIProvider>
  );
};

export const I18nProvider = ({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) => {
  function onError(error: IntlError) {
    // console.error('error');
    // if (error.code === 'MISSING_MESSAGE') return;
    // console.error(error);
  }

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      onError={onError}
    >
      {children}
    </NextIntlClientProvider>
  );
};
