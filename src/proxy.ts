import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'


export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request })
  // if (token?.token) {
  //   NextResponse.next();
  // } else {
  //   return NextResponse.redirect(new URL('/auth/signin', request.url))
  // }
  const { pathname } = request.nextUrl;

  const authPages = ['/signin', '/signup'];

  const protectedPages = [
    '/profile',
    '/orders',
    '/settings',
    '/addresses',
  ];

  const isAuthPage = authPages.some((page) =>
    pathname.startsWith(page)
  );

  const isProtectedPage = protectedPages.some((page) =>
    pathname.startsWith(page)
  );

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();


}

export const config = {
  matcher: [
    '/profile', 
    '/allorders',
    '/login',
    '/register',
    '/profile',
    '/orders',
    '/settings',
    '/addresses',
  ],
}