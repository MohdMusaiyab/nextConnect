// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Allow the requests if the following is true
  if (pathname.startsWith("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect them to the login page if they don't have a token and are requesting a protected route
  if (!token && pathname !== "/api/auth/signin") {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Add your protected routes here
};
