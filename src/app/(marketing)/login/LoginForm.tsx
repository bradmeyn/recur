"use client";

import { GitHubButton, GoogleButton } from "../_components/AuthButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../_components/FormInput";
import { RiCheckFill, RiErrorWarningFill } from "@remixicon/react";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { signInAction } from "../actions";

type FormInputs = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().trim().email({ message: "Email is required" }).min(1),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be 8 or more characters" }),
});

export default function LoginForm() {
  const [state, formAction] = useFormState(signInAction, {
    email: "",
    password: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <div>{state.message}</div>
      <form
        ref={formRef}
        action={formAction}
        className="mt-6 grid grid-cols-2 gap-5"
        // onSubmit={handleSubmit(() => formRef.current.)} //
      >
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
    </>
  );
}
