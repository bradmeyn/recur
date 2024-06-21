"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/lib/components/Inputs";
import { RiCheckFill, RiErrorWarningFill } from "@remixicon/react";
import { useRef } from "react";

import { registerSchema } from "../schema";
import { SubmitButton } from "../_components/AuthButtons";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<z.output<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
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

      <SubmitButton isDisabled={!isValid || !isDirty} action="Sign up" />
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
