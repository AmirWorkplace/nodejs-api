import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';

export const metadata = {
  title: 'Halal Foods',
  description: 'No descriptions are available here!!',
};

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
