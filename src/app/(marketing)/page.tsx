import Link from "next/link";
import SubscriptionPanel from "../(dashboard)/dashboard/_components/SubscriptionPanel";
import { TEMP_SUBSCRIPTIONS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <main className="flex-1 container">
        <section className="py-12">
          <div className="mb-4 text-center w-full mt-8">
            <h1 className="text-slate-800 text-8xl font-semibold mb-6  mx-auto">
              Track your subscriptions
            </h1>
            <p className="text-slate-700 text-xl max-w-[600px] mb-8 mx-auto">
              Recur helps you keep track of your subscriptions and recurring
              payments. Never forget to cancel a subscription again.
            </p>

            <Link
              href="/dashboard"
              className="rounded-full bg-tremor-brand text-white py-3 px-4 text-lg"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section>
          <SubscriptionPanel subscriptions={TEMP_SUBSCRIPTIONS} />
        </section>
      </main>
    </>
  );
}
