import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Check if user has a valid session
  const { data: { session } } = await supabase.auth.getSession();

  // Redirect to login if accessing protected route without session
  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname); // Pass intended route
    return NextResponse.redirect(loginUrl);
  }

  return res;
}
