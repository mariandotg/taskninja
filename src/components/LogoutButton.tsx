'use client';
import { signOut } from 'next-auth/react';
import React from 'react';
import Button from './Button';

const LogoutButton: React.FunctionComponent = () => {
  async function logout() {
    await signOut({ callbackUrl: '/login' });
  }

  return <Button onClickFn={logout}>Logout</Button>;
};

export default LogoutButton;
