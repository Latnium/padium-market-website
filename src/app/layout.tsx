import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Padmium - Enhancing Stablecoin Liquidity',
  description: 'Padmium is a utility token designed to facilitate liquidity and price control for digital currency network stablecoins.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable} style={{ colorScheme: 'light' }}>
      <body className={`${montserrat.className} bg-white`}>{children}</body>
    </html>
  );
}
