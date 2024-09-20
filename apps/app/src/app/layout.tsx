import './global.css';
import { layoutMetadata, shubakFont } from '@spt/common';

export const metadata = layoutMetadata;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className={`${shubakFont.className}`}>
      <body>{children}</body>
    </html>
  );
}
