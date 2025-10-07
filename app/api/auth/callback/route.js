import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import config from "@/config";

export const dynamic = "force-dynamic";

// This route is called after a successful login. It exchanges the code for a session and redirects to the callback URL (see config.js).
export async function GET(req) {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  const callbackUrl = requestUrl.searchParams.get("callbackUrl");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  // Use custom callbackUrl if provided, otherwise use default from config
  const redirectUrl = callbackUrl
    ? decodeURIComponent(callbackUrl)
    : requestUrl.origin + config.auth.callbackUrl;

  return NextResponse.redirect(redirectUrl);
}
