"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function signUpAction(formData: FormData) {
  console.log("signUp");
  console.log("formData", formData);
  const supabase = createClient();

  const origin = headers().get("origin");
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/login?message=Check email to continue sign in process");
}

type FormState = {
  message: string;
  email: string;
  password: string;
};

export async function signInAction(prevState: FormState, formData: FormData) {
  console.log("signIn");
  console.log("formData", formData);
  console.log("prevState", prevState);

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      message: "Could not authenticate user",
      email,
      password,
    };
  }
  console.log("success");
}

export async function signOutAction() {
  const supabase = createClient();
  const result = await supabase.auth.signOut();

  console.log("result", result);
}
