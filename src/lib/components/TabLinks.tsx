"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Link = {
  href: string;
  label: string;
};

export default function TabLinks({ links = [] }: { links: Link[] }) {
  return (
    <div>
      <div className="flex justify-start items-center space-x-4 border-b tremor-border mb-4">
        {links.map((link) => (
          <TabLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}

function TabLink({ href, label }: Link) {
  const currentPath = usePathname();
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`text-lg font-medium px-4 py-2 ${
        isActive
          ? "border-b border-tremor-brand text-tremor-brand"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {label}
    </Link>
  );
}
