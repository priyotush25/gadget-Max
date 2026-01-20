import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // Protect /add-item route
  if (pathname.startsWith("/add-item")) {
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }

  // Redirect to items if logged in and trying to access login page
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/items", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*", "/login"],
};
