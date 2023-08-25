import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Halal Foods',
  description: 'No descriptions are available here!!',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
