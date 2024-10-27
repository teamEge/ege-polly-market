import { Metadata } from 'next';
import { GlobalStyles, StyledComponentsRegistry } from '@/lib';
import { Sen } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header/StyledHeader';

const sen = Sen({ style: 'normal', subsets: ['latin'], variable: '--font-family' });

export const metadata: Metadata = {
  title: 'Next.js Polly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sen.variable}>
        <GlobalStyles />
        <StyledComponentsRegistry>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Head>
              <title>My Next.js App</title>
              <meta name="description" content="A simple Next.js app" />
            </Head>
            <Header logoName="PollyMarket" />
            <main className='containerBig' style={{ flexGrow: 1 }}>
              {children}
            </main>
            <footer className='footerArea'>
              <p>© 2024 My Next.js App</p>
            </footer>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
