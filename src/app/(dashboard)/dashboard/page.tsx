import { redirect } from "next/navigation";
import { getUser } from "@/lib/services/user";
import { getSubscriptions } from "@/lib/services/subscriptions";
import SubscriptionAdd from "../_components/SubscriptionAdd";

import { Card } from "@tremor/react";
import SubscriptionPanel from "../_components/SubscriptionPanel";
import { Subscription } from "@/lib/types/data";

export default async function SubscriptionPage() {
  // const user = await getUser();
  // if (!user) return redirect("/login");

  const user = { id: "1" };

  // const subscriptions = await getSubscriptions(user.id);

  const subscriptions: Subscription[] = {
    id: "1",
    name: "Netflix",
    amount: 10,
    frequency: "monthly",
    category: "Entertainment",
    userId: "1",
  };

  return (
    <div className="container ">
      <div className="flex items-center justify-between">
        <h1 className="my-4">Subscriptions</h1>
        <SubscriptionAdd />
      </div>
      <div>
        <SubscriptionPanel subscriptions={subscriptions} />
      </div>
    </div>
  );
}
