'use client';
import '../globals.css';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import RouteTest from '@/components/test/RouteTest';

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1>Hi Home Page</h1>
      <Link href="/sign-in">Sign In</Link>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div>
        <RouteTest title="Go to Single Product" href="/single-product" />
        <RouteTest title="About" href="/about" />
        <RouteTest title="Contact" href="/contact" />
      </div>
    </main>
  );
}
