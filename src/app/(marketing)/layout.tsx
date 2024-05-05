import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../(marketing)/_components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
