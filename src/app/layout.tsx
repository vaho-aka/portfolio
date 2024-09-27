import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import dynamic from 'next/dynamic';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

const Navigation = dynamic(() => import('../components/Navigation'));

export const metadata: Metadata = {
  title: 'Irna RAKOTOARINIRINA - Portfolio',
  description: `Irna RAKOTOARINIRINA's portfolio showcasing MERN stack projects and freelance experience.`,
  keywords:
    'MERN stack, web development, portfolio, freelance, full-stack developer, Irna Rakotoarinirina',
  openGraph: {
    title: 'Irna RAKOTOARINIRINA - Portfolio',
    description:
      "Explore Irna Rakotoarinirina's web development projects and skills in MERN stack development.",
    url: 'https://vahoaka.vercel.app/',
    siteName: 'Irna Rakotoarinirina Portfolio',
    images: [
      {
        url: '/images/portfolio-preview.png', // Your image URL
        width: 800,
        height: 600,
        alt: 'Portfolio Preview',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
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
        <div className="max-w-screen-lg mx-auto my-16">{children}</div>
      </body>
    </html>
  );
}
