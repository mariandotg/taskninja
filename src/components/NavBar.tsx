'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar: React.FunctionComponent = () => {
  return (
    <div className='bg-slate-800 px-8 py-4 flex justify-between'>
      NavBar
      <ul className='flex gap-4'>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <button onClick={() => signIn()}>Sign in</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
