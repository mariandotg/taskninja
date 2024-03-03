import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/lib/config';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
