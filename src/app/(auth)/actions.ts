"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { registerSchema, loginSchema } from "./schema";
import { cookies } from "next/headers";

export async function registerAction(formData: FormData) {
  console.log("registerAction", formData);

  const userData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const validation = registerSchema.safeParse(userData);
  if (!validation.success) {
    return {
      error: "Invalid data",
    };
  }

  const { email, password } = validation.data;

  // Sign up with Supabase
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error?.code === "user_already_exists") {
    return {
      error: "An account with this email already exists, please login instead.",
    };
  }

  if (error || !data?.user?.id) {
    return {
      error: "Registration failed",
    };
  }

  const cookieStore = cookies();
  // Store the email in a session or cookie so it can be pre-filled on the verify-email page
  cookieStore.set("recur-verify", email, {
    path: "/",
    maxAge: 300,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });
  redirect("/verify-email");
}

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const validation = loginSchema.safeParse({ email, password });

  if (!validation.success) {
    return {
      error: "Invalid data",
    };
  }

  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!error) redirect("/dashboard");

  // Handle the email not confirmed error
  if (error.message === "Email not confirmed") {
    const cookieStore = cookies();
    // Store the email in a session or cookie so it can be pre-filled on the verify-email page
    cookieStore.set("picki-verify", email, {
      path: "/",
      maxAge: 300,
      secure: true,
      httpOnly: true,
      sameSite: "strict",
    });
    // Redirect to the verify-email page
    redirect("/verify-email");
  }

  if (error) {
    return {
      error: error.message,
      email,
      password,
    };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/");
}
