import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authorized({ auth, request: { nextUrl } }: { auth: any; request: { nextUrl: URL } }) {
            const isLoggedIn = !!auth?.user;
            const isAdminSection = nextUrl.pathname.startsWith('/admin');

            // Allow access to login page
            if (nextUrl.pathname.startsWith('/admin/login')) {
                if (isLoggedIn) {
                    return Response.redirect(new URL('/admin', nextUrl));
                }
                return true;
            }

            if (isAdminSection) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            }

            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
