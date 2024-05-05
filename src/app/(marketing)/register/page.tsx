import { Divider, Card } from "@tremor/react";
import { GitHubButton, GoogleButton } from "../_components/AuthButtons";

import RegisterForm from "./RegisterForm";

export default function SignUpPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 px-4 py-10 lg:px-6">
      <Card className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Create an account
        </h3>

        <RegisterForm />

        <Divider>or with</Divider>
        <div className="grid grid-cols-2 gap-2">
          <GoogleButton action={"Sign up with"} />
          <GitHubButton action={"Sign up with"} />
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
