import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://webdevkalo.vercel.app'),
  title: {
    default: siteConfig.name,
    template: '%s | WebDevKalo',
  },
  description:
    'Kaloyan Georgiev (aka. webdevkalo). A web developer dedicated to building web apps and sharing articles on IT related topics',
  openGraph: {
    title: 'webdevkalo',
    description: 'Creating and deploying interactive, mobile-friendly apps.',
    siteName: 'webdevkalo',
    url: 'https://webdevkalo.vercel.app/',
    type: 'website',
    locale: 'en-US',
  },
  twitter: {
    title: 'webdevkalo',
    card: 'summary_large_image',
    description: 'Creating and deploying interactive, mobile-friendly apps.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow space-y-44">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
