'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import Button from './Button';

const LoginButton: React.FunctionComponent = () => {
  async function login() {
    await signIn('google', { callbackUrl: '/dashboard' });
  }

  return <Button onClickFn={login}>Sign In</Button>;
};

export default LoginButton;
