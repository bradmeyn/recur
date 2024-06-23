import Link from "next/link";
import SubscriptionPanel from "../(dashboard)/dashboard/_components/SubscriptionPanel";
import { TEMP_SUBSCRIPTIONS } from "@/lib/constants";
import PrimaryLink from "./_components/PrimaryLink";

export default function Home() {
  return (
    <>
      <main className="flex-1 container">
        <section className="py-6">
          <div className="mb-4 text-center w-full mt-8">
            <h1 className="text-slate-800 text-4xl md:text-6xl lg:text-8xl  font-semibold mb-2 mx-auto">
              Track your subscriptions
            </h1>
            <p className="text-slate-700 text-lg md:text-xl lg:text-2xl max-w-[600px] mb-8 mx-auto">
              Recur helps you keep track of your subscriptions and recurring
              payments. Never forget to cancel a subscription again.
            </p>

            <PrimaryLink href="/register" label="Get Started" />
          </div>
        </section>

        <section>
          <SubscriptionPanel subscriptions={TEMP_SUBSCRIPTIONS} />
        </section>
      </main>
    </>
  );
}
