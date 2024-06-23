import { redirect } from "next/navigation";
import { getUser } from "@/lib/services/user";
import { getSubscriptions } from "@/lib/services/subscriptions";
import SubscriptionAdd from "./_components/SubscriptionAdd";
import SubscriptionPanel from "./_components/SubscriptionPanel";
import { db } from "@/database/connection";
import { eq } from "drizzle-orm";
import { subscriptions } from "@/database/schema/schema";

export default async function SubscriptionPage() {
  const user = await getUser();
  if (!user) return redirect("/login");

  const subs = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, user.id));

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="my-4">Subscriptions</h1>
        {subs.length > 0 ? <SubscriptionAdd /> : null}
      </div>
      <div>
        {subs.length > 0 ? (
          <SubscriptionPanel subscriptions={subs} />
        ) : (
          <div>
            <p className="mb-4 text-xl">Add your first subscription</p>
            <SubscriptionAdd />
          </div>
        )}
      </div>
    </div>
  );
}
