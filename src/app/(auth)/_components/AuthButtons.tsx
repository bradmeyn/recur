"use client";

import Spinner from "@/lib/components/Spinner";
import { RiGithubFill, RiGoogleFill } from "@remixicon/react";
import { useFormStatus } from "react-dom";

export function GoogleButton({ action = "Sign in with" }: { action?: string }) {
  return (
    <a
      href="#"
      className="inline-flex w-full items-center justify-center space-x-2 rounded-tremor-default border border-tremor-border bg-tremor-background py-2 text-tremor-content-strong shadow-tremor-input hover:bg-tremor-background-subtle dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content-strong dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-background-subtle"
    >
      <RiGoogleFill className="text-2xl" />
      <span className="text-tremor-default font-medium">{action} Google</span>
    </a>
  );
}

export function GitHubButton({ action = "Sign in with" }: { action?: string }) {
  return (
    <a
      href="#"
      className="inline-flex w-full items-center justify-center space-x-2 rounded-tremor-default border border-tremor-border bg-tremor-background py-2 text-tremor-content-strong shadow-tremor-input hover:bg-tremor-background-subtle dark:border-dark-tremor-border dark:bg-dark-tremor-background dark:text-dark-tremor-content-strong dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-background-subtle"
    >
      <RiGithubFill className="text-2xl" />
      <span className="text-tremor-default font-medium">{action} GitHub</span>
    </a>
  );
}

export function SubmitButton({
  isDisabled,
  action,
}: {
  isDisabled: boolean;
  action: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      className={`
      mt-8 w-full  whitespace-nowrap rounded-tremor-default text-tremor-brand-inverted  py-2 text-center text-tremor-default font-medium
      ${
        isDisabled || pending
          ? "bg-tremor-brand/65 cursor-not-allowed  "
          : " cursor-pointer bg-tremor-brand shadow-tremor-input hover:bg-tremor-brand-emphasis"
      }`}
      disabled={isDisabled || pending}
      type="submit"
    >
      {pending ? <Spinner /> : action}
    </button>
  );
}
