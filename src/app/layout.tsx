import type { Metadata } from 'next';
import './globals.css';
import Navigation from './../components/navbar/Navigation';

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
      <body className={`antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
