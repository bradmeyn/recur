"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@components/Inputs";
import { useState } from "react";
import { registerSchema } from "../schema";
import { registerAction } from "../actions";
import { SubmitButton } from "../_components/AuthButtons";
import Message from "@components/Message";
import {
  PasswordCompare,
  PasswordFeedback,
} from "../_components/PasswordFeedback";
import Link from "next/link";
export default function RegisterForm() {
  const {
    register,
    watch,
    trigger,
    formState: { errors, isValid, isDirty },
  } = useForm<z.output<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Watch the values of the password and confirmPassword to compare
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function clientAction(data: FormData) {
    // Trigger validation
    const isValid = await trigger();
    // Validate the form
    if (!isValid) return;

    // Call the server action
    const { error } = await registerAction(data);
    if (error) {
      setErrorMessage(error);
    }
  }

  return (
    <>
      {errorMessage ? <Message variant="error" message={errorMessage} /> : null}
      <form action={clientAction} method="post" className="mt-6 space-y-4">
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="user@mail.com"
          register={register("email")}
          error={errors?.email?.message}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          register={register("password")}
          error={errors.password?.message}
        />
        <PasswordFeedback password={password} />

        <div>
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
    </>
  );
}
