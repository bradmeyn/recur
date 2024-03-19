"use client";

import {
  RiMoneyDollarCircleLine,
  RiRefund2Line,
  RiPieChartLine,
  RiCoinLine,
  RiSettings4Line,
  RiAccountCircleFill,
} from "@remixicon/react";
import { Divider } from "@tremor/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/app/(marketing)/actions";
import Image from "next/image";

export default function Navbar() {
  const links = [
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
  ];

  return (
    <nav>
      <Link
        href={"/"}
        className="text-3xl font-semibold md:mb-10 text-white hidden md:block"
      >
        <Image
          src={"./logo.svg"}
          alt="Supabudget Logo"
          width={40}
          height={40}
        />
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

        <Divider />
        <form action={logoutAction}>
          <button className="mb-3 p-2 font-semibold flex gap-4 transition-all duration-200 ease-in-out rounded-lg text-slate-100 hover:text-indigo-300">
            <RiAccountCircleFill size={20} />
          </button>
        </form>
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
        {/* <span className="hidden md:inline">{name}</span> */}
      </Link>
    </li>
  );
}
