import RouteTest from '@/components/test/RouteTest';
import React from 'react';

const Contact = async () => {
  return (
    <div>
      <h1 className="text-5xl m-10">Contact</h1>
      <div>
        <RouteTest title="Home" href="/" />
        <RouteTest title="About" href="/about" />
        <RouteTest title="Contact" href="/contact" />
      </div>
    </div>
  );
};

export default Contact;
