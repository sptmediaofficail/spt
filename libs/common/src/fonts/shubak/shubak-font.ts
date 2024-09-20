import localFont from 'next/font/local';

export const shubakFont = localFont({
  src: [
    {
      path: './assets/Shubbak-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: './assets/Shubbak-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: './assets/Shubbak-SemiBold.woff2',
      style: 'normal',
      weight: '600',
    },
  ],
  variable: '--font-shubak',
});
