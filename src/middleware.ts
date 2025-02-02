import { NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = createRouteMatcher([
  "/", // Home Page
  "/my_account(.*)", // My Account and sub-routes
  "/about",
  "/contact",
  "/sign-in(.*)",
]);


export default clerkMiddleware((req: any) => {
  const { nextUrl } = req;

  if (!nextUrl) {
    console.error("Middleware failed: nextUrl is not defined.");
    return NextResponse.next();
  }

  const pathname = nextUrl.pathname;

  if (publicRoutes(pathname)) {
    return NextResponse.next();
  }

  // Process private routes
  return NextResponse.next();
});

export const config:any = {
  matcher:[ "/((?!_next|favicon.ico|static).*)", "/my_account(.*)", "/sign-in(.*)"],
};



