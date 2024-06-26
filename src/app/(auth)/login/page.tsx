import { Divider, Card } from "@tremor/react";
import LoginForm from "./LoginForm";
import { GoogleButton, GitHubButton } from "../_components/AuthButtons";
import Link from "next/link";
import { getUser } from "@/lib/services/user";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await getUser();
  if (user) return redirect("/dashboard");

  return (
    <div className="flex min-h-full flex-1 flex-col  px-4 py-10 lg:px-6">
      <Card className="sm:mx-auto sm:w-full sm:max-w-lg p-10">
        <h1 className="text-left text-2xl  font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Sign in to your account
        </h1>

        <LoginForm />

        <div className="text-center p-2">
          <small>
            {"Don't have an account? "}
            <Link href={"/register"} className="text-tremor-brand">
              Sign up
            </Link>
          </small>
        </div>

        <Divider>or with</Divider>
        <div className="grid grid-cols-2 gap-2">
          <GoogleButton action={"Continue with"} />
          <GitHubButton action={"Continue with"} />
        </div>

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
