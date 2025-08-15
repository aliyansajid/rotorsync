import { auth } from "./auth";

export default auth(async (req) => {
  const session = await auth();

  // Only these routes are accessible to non-logged in users
  const publicRoutes = ["/login", "/forgot-password", "/reset-password"];

  const apiAuthPrefix = "/api/auth";
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  // Skip auth processing for API auth routes
  if (isApiAuthRoute) return undefined;

  // Handle public routes
  if (isPublicRoute) {
    // If user is already logged in and trying to access login pages, redirect to home
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return undefined;
  }

  // All other routes require authentication
  if (!isLoggedIn) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  // Check if user has ADMIN role
  if (session?.user?.role !== "ADMIN") {
    return Response.redirect(new URL("/login", nextUrl));
  }

  if (nextUrl.pathname === "/") {
    return Response.redirect(new URL("/", nextUrl));
  }

  return undefined;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
