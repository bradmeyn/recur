import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../(dashboard)/_components/Header";

export const metadata: Metadata = {
  title: "Recur | Dashboard",
  description: "Track your subscriptions and recurring payments",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-tremor-background-muted min-h-screen flex flex-col">
        <Header />
        <div className="p-4 flex-1 flex flex-col h-full container">
          <main className="flex-1 bg-tremor-background-muted rounded-lg ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
