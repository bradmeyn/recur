import NewPasswordForm from "./PasswordForm";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function UpdatePasswordPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen ">
      <div className="container">
        <div className="bg-white items-start p-10 shadow-sm flex flex-col mt-10 rounded-xl w-46 mx-auto max-w-full md:max-w-[500px]">
          <NewPasswordForm />
        </div>
      </div>
    </main>
  );
}
