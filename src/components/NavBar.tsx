import Link from 'next/link';
import React from 'react';
import { getServerSession } from 'next-auth';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const NavBar: React.FunctionComponent = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <div className='bg-slate-800 px-8 py-4 flex justify-between items-center'>
      NavBar
      <ul className='flex gap-4 items-center'>
        {session?.user ? (
          <>
            <li>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li className='flex gap-2 items-center'>
              <p>{session.user?.email}</p>
              <img
                src={session.user?.image!}
                className='h-8 w-8 rounded-full'
              />
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <li>
            <LoginButton />
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
