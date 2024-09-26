import type { Metadata } from 'next';
import './globals.css';
import Navigation from './../components/navbar/Navigation';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IRNA RAKOTOARINIRINA',
  description: `Irna RAKOTOARINIRINA's portfolio`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${montserrat.className}`}>
        <Navigation />
        <div className="max-w-screen-lg mx-auto my-4">{children}</div>
      </body>
    </html>
  );
}
