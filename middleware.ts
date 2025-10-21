import { NextResponse, type NextRequest } from "next/server";
import { APP } from "@/constants/APP";
import { PATH, PUBLIC_PATH } from "@/constants/PATH";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(APP.cookieAccessTokenName)?.value;
  const { pathname } = req.nextUrl;

  if (PUBLIC_PATH.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL(PATH.login, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pages except Next.js system and static assets
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|manifest.json|public).*)",
  ],
};
