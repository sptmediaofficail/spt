import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  console.log('token', token?.value);
  console.log('req.url', req.url);

  // If there is a token and the user is trying to access /, /login or /register, redirect to /home
  if (
    token?.value &&
    (req.nextUrl.pathname === '/' ||
      req.nextUrl.pathname === '/login' ||
      req.nextUrl.pathname === '/register')
  ) {
    return NextResponse.redirect(new URL('/home', req.nextUrl));
  }

  // If there is no token and user tries to access protected pages, redirect to login
  if (
    !token?.value &&
    req.nextUrl.pathname !== '/login' &&
    req.nextUrl.pathname !== '/register'
  ) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // Uncomment this block to verify token by calling your API
  /*
  const baseUrl = process.env.NEXT_PUBLIC_API_URL; // Make sure this env variable is set correctly
  const res = await fetch(`${baseUrl}/shared/auth/me`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  if (res.status !== 200) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  */

  return NextResponse.next(); // Proceed if authenticated or no redirection needed
}

export const config = {
  matcher: ['/((?!_next|static|public|favicon.ico).*)'], // Exclude API, static assets, etc.
};
