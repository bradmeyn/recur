"use client";
import { usePathname } from "next/navigation";

export default function Header() {
  const page = usePathname().split("/").pop();

  let pageName = "";
  switch (page) {
    case "budget":
      pageName = "Budget";
      break;
    case "subscriptions":
      pageName = "Subscriptions";
      break;
    case "balance-sheet":
      pageName = "Balance Sheet";
      break;
    case "insurances":
      pageName = "Insurances";
      break;
    default:
      pageName = "Dashboard";
  }

  return (
    <header className="w-full flex justify-between items-center mb-4">
      <h1>{pageName}</h1>
    </header>
  );
}
