"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthError } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { Input } from "@/lib/components/Inputs";
import Message from "@/lib/components/Message";
import {
  PasswordCompare,
  PasswordFeedback,
} from "../_components/PasswordFeedback";
import { newPasswordSchema } from "../schema";
import Link from "next/link";
import Spinner from "@/lib/components/Spinner";

export default function NewPasswordForm() {
  const supabase = createClient();

  // Form state
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    watch,
  } = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
  });

  // State for form messages
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Watch for password changes to compare
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  // Form submission handler
  const onSubmit: SubmitHandler<z.infer<typeof newPasswordSchema>> = async (
    data
  ) => {
    setError(null);
    try {
      const { error } = await supabase.auth.updateUser(
        { password: data.password },
        { emailRedirectTo: "http://localhost:3000/dashboard" }
      );
      if (error) throw error;
      setSuccess(true);
    } catch (error) {
      setError((error as AuthError).message);
    }
  };

  return (
    <>
      {error ? (
        <div>
          <h1 className="text-xl mt-2">Unable to update password</h1>
          <p className="mb-4 my-3">
            We were unable to update your password. Please try again.
          </p>
          <Message variant="error" message={error} />
        </div>
      ) : success ? (
        <div>
          <h1 className="text-xl mt-2">Password Updated</h1>

          <Message variant="success" message="Your password has been updated" />

          <small className="block text-center mt-2">
            <Link href={"/dashboard"} className="text-tremor-brand">
              Dashboard
            </Link>
          </small>
        </div>
      ) : (
        <div>
          <h1 className="text-xl mt-2">Update your Password</h1>
          <p className="my-3 mb-4">
            Enter your new password below to update your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="space-y-2">
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Password"
                register={register("password")}
                error={errors.password?.message}
              />
              <PasswordFeedback password={password} />
            </div>

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

            <button
              className={`
                mt-8 w-full  whitespace-nowrap rounded-tremor-default text-tremor-brand-inverted  py-2 text-center text-tremor-default font-medium
                ${
                  isSubmitting || !isValid || !isDirty
                    ? "bg-tremor-brand/65 cursor-not-allowed"
                    : "cursor-pointer bg-tremor-brand shadow-tremor-input hover:bg-tremor-brand-emphasis"
                }`}
              disabled={isSubmitting || !isValid || !isDirty}
              type="submit"
            >
              {isSubmitting ? <Spinner /> : "Update Password"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
