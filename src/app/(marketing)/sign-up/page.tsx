"use client";
import { Divider, Card } from "@tremor/react";
import { GitHubButton, GoogleButton } from "../_components/AuthButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../_components/FormInput";
import { RiCheckFill, RiErrorWarningFill } from "@remixicon/react";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";

export default function SignUpPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 px-4 py-10 lg:px-6">
      <h1 className="text-center mb-10">Supabudget</h1>
      <Card className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Create an account
        </h3>

        <SignUpForm />

        <Divider>or with</Divider>
        <div className="grid grid-cols-2 gap-2">
          <GoogleButton />
          <GitHubButton />
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

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "First name must be 2 or more letters" }),
    lastName: z
      .string()
      .trim()
      .min(2, { message: "Last name must be 2 or more letters" }),
    email: z.string().trim().email({ message: "Email is required" }).min(1),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be 8 or more characters" }),
    confirmPassword: z.string().trim(),
  })
  .refine((data: FormInputs) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

function SignUpForm() {
  const [state, formAction] = useFormState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Watch the values of the password and confirmPassword to compare
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action="#"
      method="post"
      className="mt-6 grid grid-cols-2 gap-5"
      onSubmit={handleSubmit(() => formRef.current?.submit())} //
    >
      <div className="col-span-full sm:col-span-1">
        <FormInput
          label="First name"
          id="first-name"
          type="text"
          placeholder="First name"
          register={register("firstName")}
          error={errors?.firstName?.message}
        />
      </div>

      <div className="col-span-full sm:col-span-1">
        <FormInput
          label="Last name"
          id="last-name"
          type="text"
          placeholder="Last name"
          register={register("lastName")}
          error={errors?.lastName?.message}
        />
      </div>

      <div className="col-span-2">
        <FormInput
          label="Email"
          id="email"
          type="email"
          placeholder="user@mail.com"
          register={register("email")}
          error={errors?.email?.message}
        />
      </div>
      <div className="col-span-2">
        <FormInput
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          register={register("password")}
          error={errors.password?.message}
        />
      </div>

      <div className="col-span-2">
        <FormInput
          label="Confirm password"
          id="confirm-password"
          type="password"
          placeholder="Confirm password"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <PasswordCompare
          password={password}
          confirmPassword={confirmPassword}
        />
      </div>

      <button
        className={`
          mt-4  col-span-2 w-full  whitespace-nowrap rounded-tremor-default text-tremor-brand-inverted   py-2 text-center text-tremor-default font-medium
          ${
            !isValid && isDirty
              ? "bg-tremor-brand/65 cursor-not-allowed  border-red-600  "
              : " cursor-pointer bg-tremor-brand shadow-tremor-input hover:bg-tremor-brand-emphasis"
          }`}
        disabled={!isValid}
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
}

type PasswordCompareProps = {
  password: string;
  confirmPassword: string;
};

function PasswordCompare({ password, confirmPassword }: PasswordCompareProps) {
  if (!password || !confirmPassword) return null;

  if (password === confirmPassword) {
    return (
      <small className="flex items-center gap-2 text-green-700 mt-1 text-sm">
        <RiCheckFill />
        <span>Passwords match</span>
      </small>
    );
  }
  return (
    <small className="flex items-center gap-2 text-red-700 mt-1 text-sm">
      <RiErrorWarningFill />
      <span>Passwords do not match</span>
    </small>
  );
}
