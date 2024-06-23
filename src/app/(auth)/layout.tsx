import type { Metadata } from "next";
import "@/app/globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recur",
  description: "Track your subscriptions and recurring expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-tremor-brand-muted flex min-h-screen flex-col">
        <header className="flex justify-between container py-4">
          <Link
            href={"/"}
            className="text-slate-900 font-bold flex items-center gap-1 "
          >
            <span className="text-xl">recur</span>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
