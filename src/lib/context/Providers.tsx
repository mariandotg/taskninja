'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FunctionComponent<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
