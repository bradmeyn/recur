import { cookies } from "next/headers";

import ResendForm from "./ResendForm";
import { getUser } from "@/lib/services/user";

export default async function VerifyEmailPage() {
  const user = await getUser();
  const cookieStore = cookies();
  const email = cookieStore.get("recur-verify")?.value || "fake_user@mail.com";

  return (
    <main>
      <div className="container">
        <ResendForm email={email} />
      </div>
    </main>
  );
}
