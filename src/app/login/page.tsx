import LoginButton from '@/components/LoginButton';

export default function LoginPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Login</h1>
      <p>Enter your username and password to continue.</p>
      <p>Or Login with</p>
      <LoginButton>Sign in with Google</LoginButton>
    </main>
  );
}
