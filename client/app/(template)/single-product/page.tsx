import RouteTest from '@/components/test/RouteTest';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h1 className="text-5xl">Single Product</h1>
      <br />
      <RouteTest title="Home" href="/" />
    </div>
  );
};

export default Page;
