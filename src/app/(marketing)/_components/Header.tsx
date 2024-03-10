import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-between container py-4">
      <span className="text-slate-900 font-bold ">Supabudget</span>

      {user ? <AuthenticatedLinks /> : <UnauthenticatedLinks />}
    </header>
  );
}

function UnauthenticatedLinks() {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/login" className="rounded-full  py-2 px-5 ">
        Login
      </Link>

      <Link
        href="/sign-up"
        className="rounded-full bg-tremor-brand text-white py-2 px-5 "
      >
        Sign up
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
