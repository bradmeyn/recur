"use server";
import { redirect } from "next/navigation";

export async function addIncomeAction(formData: FormData) {
  return redirect("/income?message=Income added successfully");
}
