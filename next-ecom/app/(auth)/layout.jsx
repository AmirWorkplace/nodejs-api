import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';

export const metadata = {
  title: 'Halal Foods',
  descriptions: 'A Next.js 13 e-commerce full stuck website.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
