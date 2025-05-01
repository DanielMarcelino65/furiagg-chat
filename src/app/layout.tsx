import type { Metadata } from 'next';
import { Bebas_Neue, Rubik } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Header from '@/components/molecules/Header';
import { UserProvider } from '@/context/user';

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  weight: '400',
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FuriaGG - Chat',
  description:
    'Interaja com a Fúria! Um chatbot feito para os fãs do time de CS da Fúria GG.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta name="apple-mobile-web-app-title" content="FuriaGG" />
      </Head>
      <body
        className={`${bebasNeue.variable} ${rubik.variable} antialiased overflow-hidden`}
      >
        <UserProvider>
          <Header />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
