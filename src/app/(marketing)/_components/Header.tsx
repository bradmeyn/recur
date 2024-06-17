import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-between container py-4">
      <Link
        href={"/"}
        className="text-slate-900 font-bold flex items-center gap-1 "
      >
        <span className="text-xl">Supabudget</span>
      </Link>

      {user ? <AuthenticatedLinks /> : <UnauthenticatedLinks />}
    </header>
  );
}

function UnauthenticatedLinks() {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href="/login"
        className="rounded-full bg-tremor-brand text-white py-2 px-5 "
      >
        Sign in
      </Link>
    </div>
  );
}

function AuthenticatedLinks() {
  return (
    <Link
      href="/dashboard"
      className="rounded-full bg-tremor-brand text-white py-2 px-5 "
    >
      Dashboard
    </Link>
  );
}
