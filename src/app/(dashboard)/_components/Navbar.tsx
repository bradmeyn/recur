"use client";

import {
  RiMoneyDollarCircleLine,
  RiRefund2Line,
  RiPieChartLine,
  RiCoinLine,
  RiSettings4Line,
} from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    {
      name: "Dashboard",
      href: "/dashboard/",
      Icon: RiPieChartLine,
    },
    {
      name: "Budget",
      href: "/dashboard/budget",
      Icon: RiMoneyDollarCircleLine,
    },
    {
      name: "Subscriptions",
      href: "/dashboard/subscriptions",
      Icon: RiRefund2Line,
    },
    {
      name: "Balance Sheet",
      href: "/dashboard/balance-sheet",
      Icon: RiCoinLine,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      Icon: RiSettings4Line,
    },
  ];

  return (
    <nav>
      <Link
        href={"/"}
        className="text-3xl font-semibold md:mb-10 text-white hidden md:block"
      >
        Supabudget
      </Link>
      <ul className="flex md:flex-col gap-2 justify-center  w-full">
        {links.map((link) => (
          <NavbarLink
            key={link.href}
            name={link.name}
            href={link.href}
            Icon={link.Icon}
          />
        ))}
      </ul>
    </nav>
  );
}

type NavbarLinkProps = {
  name: string;
  href: string;
  Icon: React.ElementType;
};

function NavbarLink({ name, href, Icon }: NavbarLinkProps) {
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
        <Icon className="inline-block" />
        <span className="hidden md:inline">{name}</span>
      </Link>
    </li>
  );
}
