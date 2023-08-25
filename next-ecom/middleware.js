import { authMiddleware } from '@clerk/nextjs';

// See https://clerk.com/docs/references/nextjs/auth-middleware

export default authMiddleware({
  publicRoutes: ['/', '/api/webhook/clerk'],
  ignoredRoutes: ['/api/webhook/clerk'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
