import { Card } from "@tremor/react";
import SubscriptionTable from "./_components/SubscriptionTable";
import SubscriptionCategoryChart from "./_components/SubscriptionCategoryChart";

export default function SubscriptionsPage() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 ">
        <Card className="col-span-12 md:col-span-6 lg:col-span-4">
          <h2>Monthly Spend</h2>
        </Card>

        {/* <Card className="col-span-12 md:col-span-6 lg:col-span-4">
          <h2>Active Subscriptions</h2>
          <p className="text-3xl font-semibold">{activeSubscriptions.length}</p>
        </Card>

        <div className="col-span-12 lg:col-span-8">
          <SubscriptionTable subscriptions={SUBSCRIPTIONS} />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <SubscriptionCategoryChart subscriptions={activeSubscriptions} />
        </div> */}
      </div>
    </>
  );
}
