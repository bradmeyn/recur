"use client";

import { RiMoneyDollarCircleFill } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/dashboard",
    },
    {
      name: "Subscriptions",
      href: "/dashboard/subscriptions",
    },

    {
      name: "Budget",
      href: "/dashboard/budget",
    },
  ];

  return (
    <nav className="flex p-4 fixed sm:static sm:h-full sm:flex sm:flex-col bottom-1 w-full sm:w-[300px] rounded-lg bg-slate-700">
      <div className="mb-10 text-4xl font-semibold p-4 text-white">
        Supabudget
      </div>
      <ul className="flex sm:flex-col gap-1 w-full">
        {links.map((link) => (
          <NavbarLink key={link.href} name={link.name} href={link.href} />
        ))}
      </ul>
    </nav>
  );
}

type NavbarLinkProps = {
  name: string;
  href: string;
};

function NavbarLink({ name, href }: NavbarLinkProps) {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  const activeClasses =
    "bg-tremor-brand text-slate-100 rounded-lg text-white hover:text-white ";
  const inactiveClasses = "text-slate-100 hover:text-indigo-300";

  return (
    <li>
      <Link
        href={href}
        className={`mb-3 p-2 font-semibold flex gap-4 transition-all duration-200 ease-in-out rounded-lg ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        <RiMoneyDollarCircleFill className="inline-block" />
        <span>{name}</span>
      </Link>
    </li>
  );
}
