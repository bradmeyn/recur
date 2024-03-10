import { Divider, Card } from "@tremor/react";
import LoginForm from "./LoginForm";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 px-4 py-10 lg:px-6">
      <h1 className="text-center mb-10">Supabudget</h1>
      <Card className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Login
        </h3>

        <LoginForm />

        <Divider>or with</Divider>

        <p className="mt-4 text-tremor-label text-tremor-content dark:text-dark-tremor-content text-center">
          By signing in, you agree to our{" "}
          <a href="#" className="underline underline-offset-4">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
      </Card>
    </div>
  );
}
