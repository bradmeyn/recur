"use client";

import { SubmitButton } from "../_components/AuthButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Input } from "@/lib/components/Inputs";
import { loginAction } from "../actions";
import { useState } from "react";
import Message from "@components/Message";

import { loginSchema } from "../schema";

export default function LoginForm() {
  const {
    register,
    trigger,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<z.output<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function clientAction(data: FormData) {
    // Trigger validation
    const isValid = await trigger();
    // Validate the form
    if (!isValid) return;

    // Call the server action
    const { error } = await loginAction(data);
    if (error) {
      setErrorMessage(error);
    }
  }

  return (
    <>
      {errorMessage ? <Message variant="error" message={errorMessage} /> : null}
      <form action={clientAction} className="mt-6 space-y-4">
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="user@mail.com"
          register={register("email")}
          error={errors?.email?.message}
        />

        <div>
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            register={register("password")}
            error={errors.password?.message}
          />
          <small className="block text-center mt-2">
            <Link href={"/forgot-password"} className="text-tremor-brand">
              Forgot your password?
            </Link>
          </small>
        </div>

        <SubmitButton
          isDisabled={!isDirty || !isValid || isSubmitting}
          action="Login"
        />
      </form>
    </>
  );
}
