import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define public routes (no authentication required)
const publicRoutes = ["/login", "/forgot-password", "/reset-password/[token]"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for a public route
  const isPublicRoute = publicRoutes.some(
    (route) => pathname.startsWith(route) || pathname === route
  );

  // Get the token from the cookie (HTTP-only, so we need a server-side check)
  const token = request.cookies.get("token")?.value;

  // If no token and not a public route, redirect to login
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If token exists and on a public route, allow but consider redirecting to dashboard (optional)
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Proceed with the request for authenticated users on protected routes
  return NextResponse.next();
}

// Configure matcher to apply middleware to all routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
