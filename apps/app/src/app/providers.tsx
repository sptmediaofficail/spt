'use client';
import { NextUIProvider } from '@nextui-org/system';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OpenAPI } from '../../../../libs/api-sdk/src/lib/gen2/requests';
import { useRouter } from 'next/navigation';

OpenAPI.BASE = 'https://api.spt.sa/api/v1';

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
