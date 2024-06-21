import { RiLogoutBoxRLine } from "@remixicon/react";
import { logoutAction } from "@/lib/actions/user";
export default function Header() {
  return (
    <header className="w-full py-4 text-2xl bg-slate-800 text-white">
      <div className="container flex justify-between items-center">
        <span>Recure</span>

        <form action={logoutAction}>
          <button className="hover:text-tremor-brand-muted">
            <RiLogoutBoxRLine size={24} />
          </button>
        </form>
      </div>
    </header>
  );
}
