"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthError } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { Input } from "@/lib/components/Inputs";
import Message from "@/lib/components/Message";
import Spinner from "@/lib/components/Spinner";
import { RiCheckboxCircleLine } from "@remixicon/react";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function ForgotForm() {
  const supabase = createClient();

  // State for form messages

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Form submission handler

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    setError(null);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/auth/change-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
    }
  };
  return (
    <>
      {success ? (
        <>
          <h1 className="text-xl my-2">Check your email</h1>
          <p className="mb-4">
            Thanks! Please check your email and use the link to reset your
            password.
          </p>
          <Message variant="success" message="Email sent" />
        </>
      ) : error ? (
        <>
          <h1 className="text-xl my-3">An error has occurred</h1>
          <Message variant="error" message={error} />
        </>
      ) : (
        <>
          <h1 className="text-xl my-3">Reset your password</h1>
          <p className="mb-4 ">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Email"
              register={register("email")}
              error={errors.email?.message}
            />

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
              {isSubmitting ? <Spinner /> : "Send"}
            </button>
          </form>
        </>
      )}
    </>
  );
}
