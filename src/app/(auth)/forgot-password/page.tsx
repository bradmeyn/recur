import Link from "next/link";
import ForgotForm from "./ForgotForm";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen">
      <div className="container">
        <div className="bg-white items-start p-10 shadow-sm flex flex-col mt-10 rounded-xl w-46 mx-auto max-w-full md:max-w-[500px]">
          <ForgotForm />
          <small className="p-2 text-center block mx-auto">
            {"Return to "}
            <Link href={"/login"} className="text-tremor-brand">
              Login
            </Link>
          </small>
        </div>
      </div>
    </main>
  );
}
