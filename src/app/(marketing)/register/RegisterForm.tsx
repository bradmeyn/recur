"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/lib/components/Inputs";
import { RiCheckFill, RiErrorWarningFill } from "@remixicon/react";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";

type FormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const schema = z
    .object({
      name: z
        .string()
        .trim()
        .min(2, { message: "First name must be 2 or more letters" }),

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
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
      <div className="col-span-full">
        <Input
          label="Name"
          id="name"
          type="text"
          placeholder="Name"
          register={register("name")}
          error={errors?.name?.message}
        />
      </div>

      <div className="col-span-2">
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="user@mail.com"
          register={register("email")}
          error={errors?.email?.message}
        />
      </div>
      <div className="col-span-2">
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          register={register("password")}
          error={errors.password?.message}
        />
      </div>

      <div className="col-span-2">
        <Input
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
