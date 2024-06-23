import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import PrimaryLink from "./PrimaryLink";

export default async function Header() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-between container py-2">
      <Link
        href={"/"}
        className="text-slate-900 font-bold flex items-center gap-1 "
      >
        <span className="text-xl">recur</span>
      </Link>

      {user ? <AuthenticatedLinks /> : <UnauthenticatedLinks />}
    </header>
  );
}

function UnauthenticatedLinks() {
  return (
    <div className="flex gap-4 items-center">
      <PrimaryLink href="/login" label="Sign in" />
    </div>
  );
}

function AuthenticatedLinks() {
  return <PrimaryLink href="/dashboard" label="Dashboard" />;
}
