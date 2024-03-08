import Link from "next/link";
import Dashboard from "./_components/Dashboard";

export default function Home() {
  return (
    <>
      <main className="flex-1 container">
        <section className="py-12">
          <div className="mb-4 text-center w-full">
            <h1 className="text-slate-800 text-8xl font-semibold mb-4 max-w-[800px] mx-auto">
              <div>Super-powered</div> <div>finance dashboard</div>
            </h1>
            <p className="text-slate-700 text-xl max-w-[600px] mb-8 mx-auto">
              Supabudget is a personal finance dashboard designed to help you
              save money. Build budgets, track subscriptions and gain a better
              understanding over where your money is going.
            </p>

            <Link
              href="/dashboard"
              className="rounded-full bg-tremor-brand text-white py-3 px-4  text-lg"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="py-12">
          <Dashboard />
        </section>

        <section className="py-12"></section>
      </main>
    </>
  );
}
