import { RiGithubFill, RiGoogleFill } from "@remixicon/react";

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
