import { redirect } from "next/navigation";
import { getUser } from "@/lib/services/user";
import { getSubscriptions } from "@/lib/services/subscriptions";
import SubscriptionAdd from "../_components/SubscriptionAdd";
import SubscriptionPanel from "../_components/SubscriptionPanel";

export default async function SubscriptionPage() {
  const user = await getUser();
  if (!user) return redirect("/login");

  const subscriptions = await getSubscriptions(user.id);

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="my-4">Subscriptions</h1>
        {subscriptions.length > 0 ? <SubscriptionAdd /> : null}
      </div>
      <div>
        {subscriptions.length > 0 ? (
          <SubscriptionPanel subscriptions={subscriptions} />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 text-xl">Add your first subscription</p>
            <SubscriptionAdd />
          </div>
        )}
      </div>
    </div>
  );
}
