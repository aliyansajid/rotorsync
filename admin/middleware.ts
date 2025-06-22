import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login", "/forgot-password", "/reset-password/[token]"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicRoute = publicRoutes.some(
    (route) =>
      pathname === route || pathname.startsWith(route.replace("[token]", ""))
  );
  const accessToken = request.cookies.get("accessToken")?.value;

  if (!accessToken && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (accessToken && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (accessToken && !isPublicRoute) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
        {
          headers: { Cookie: `accessToken=${accessToken}` },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!response.ok || data.user.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } catch (error) {
      console.error("Middleware error:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
