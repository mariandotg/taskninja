import { withAuth } from 'next-auth/middleware';

export { withAuth } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard'],
};

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: '/login',
    error: '/error',
  },
});
                                                                        