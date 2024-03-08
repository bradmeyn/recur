import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-between container py-4">
      <span className="text-slate-900 font-bold text-xl">Supabudget</span>

      {user ? <AuthenticatedLinks /> : <UnauthenticatedLinks />}
    </header>
  );
}

function UnauthenticatedLinks() {
  return (
    <div>
      <Link
        href="/Login"
        className="rounded-full text-slate-400 py-2 px-4 text-lg"
      >
        Login
      </Link>

      <Link
        href="/sign-up"
        className="rounded-full bg-tremor-brand text-white py-2 px-4 text-lg"
      >
        Sign Up
      </Link>
    </div>
  );
}

function AuthenticatedLinks() {
  return (
    <Link
      href="/dashboard"
      className="rounded-full bg-tremor-brand text-white py-2 px-4 text-lg"
    >
      Dashboard
    </Link>
  );
}
