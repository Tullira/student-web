"use client";

import NextAuthSessionProvider from 'providers/sessionProvider';
import { ThemeProvider } from 'components/molecules/theme-provider';
import 'styles/globals.css';
import { TooltipProvider } from 'components/ui/tooltip';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextAuthSessionProvider>
          <TooltipProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </TooltipProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
