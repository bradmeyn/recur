"use client";

import {
  GitHubButton,
  GoogleButton,
  SubmitButton,
} from "../_components/AuthButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/lib/components/Inputs";
import { loginAction } from "../actions";
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

  const clientLoginAction = async (data: FormData) => {
    // Validate the form
    trigger();

    if (!isValid) {
      return;
    }

    // Call the server action
    const result = await loginAction(data);
    console.log(result);
  };

  return (
    <>
      <form
        action={clientLoginAction}
        className="mt-6 grid grid-cols-2 gap-5"
        // onSubmit={handleSubmit(() => formRef.current.)} //
      >
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

        <SubmitButton
          isDisabled={!isDirty || !isValid || isSubmitting}
          action="Login"
        />
      </form>
    </>
  );
}
