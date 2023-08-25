'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface RouteTestProps {
  href: string;
  title: string;
}

export const RouteTest: FC<RouteTestProps> = async ({ href, title }) => {
  const router = useRouter();

  return (
    <div>
      <Link
        href={href}
        className="m-4 px-3 py-1 text-sm font-medium border-2 border-cyan-500 text-cyan-500 bg-slate-900 duration-500 uppercase hover:tracking-wide hover:bg-cyan-500 hover:text-slate-900 rounded-md"
      >
        {title}
      </Link>

      <button
        onClick={function (event) {
          event.preventDefault();
          return router.push(href);
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default RouteTest;
