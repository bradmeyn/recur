import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";

import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";
  if (!code) return NextResponse.redirect(`${origin}/login`);

  // exchange the code for a session
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options });
        },
      },
    }
  );

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error || !data?.user) {
      console.error("An unexpected error occurred: ", error);
      return NextResponse.redirect(`${origin}/login`);
    }

    return NextResponse.redirect(`${origin}/update-password`);
  } catch (error) {
    console.error("An unexpected error occurred: ", error);
    return NextResponse.redirect(`${origin}/login`);
  }
}
