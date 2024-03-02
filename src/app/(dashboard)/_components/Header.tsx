"use client";
import { usePathname } from "next/navigation";

export default function Header() {
  const page = usePathname();
  const pageName =
    page.split("/")?.pop()?.charAt(0)?.toUpperCase() +
    page.split("/")?.pop()?.slice(1);

  return (
    <header className="w-full">
      <h1 className=" mb-2">{pageName}</h1>
    </header>
  );
}
