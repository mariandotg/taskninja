'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import Button from './Button';
import { AuthProvider } from '@/models/auth/AuthProvider';

interface Props {
  children: React.ReactNode;
  provider?: AuthProvider;
}

const LoginButton: React.FunctionComponent<Props> = ({
  children,
  provider = 'google',
}) => {
  async function login() {
    await signIn(provider, { callbackUrl: '/dashboard' });
  }

  return <Button onClickFn={login}>{children}</Button>;
};

export default LoginButton;
