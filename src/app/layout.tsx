import type { Metadata } from 'next';

import NextAuthSessionProvider from 'providers/sessionProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'A simple boilerplate for next.js',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextAuthSessionProvider>
            {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
