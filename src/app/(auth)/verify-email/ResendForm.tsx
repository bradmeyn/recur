"use client";

import { Card } from "@tremor/react";
import { RiSendPlane2Line, RiSendPlaneLine } from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";
import Spinner from "@components/Spinner";
import { createClient } from "@/lib/supabase/client";
import { RiCheckFill } from "@remixicon/react";

export default function ResendForm({ email }: { email: string }) {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function resendEmail() {
    setIsSending(true);
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.resend({ type: "signup", email });
    } catch (error) {
      console.error("Error resending email", error);
    } finally {
      setIsSending(false);
      setSent(true);
    }
  }

  return (
    <Card className="sm:mx-auto sm:w-full sm:max-w-lg">
      <h1 className="text-left text-2xl  font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Verify your email
      </h1>
      <p className=" text-lg py-2 mb-4">
        Please check <strong className="font-semibold">{email}</strong> for a
        link to verify your email address.
      </p>
      <>
        {sent ? (
          <div className="flex items-center p-4">
            <RiCheckFill className="text-green-700 " /> <p>Email resent</p>
          </div>
        ) : (
          <button
            className={`
    mt-4  col-span-2 w-full  whitespace-nowrap rounded-tremor-default text-tremor-brand-inverted   py-2 text-center text-tremor-default font-medium
    ${
      isSending
        ? "bg-tremor-brand/65 cursor-not-allowed  "
        : " cursor-pointer bg-tremor-brand shadow-tremor-input hover:bg-tremor-brand-emphasis"
    }`}
            onClick={resendEmail}
          >
            {isSending ? (
              <Spinner />
            ) : (
              <div className="flex items-center justify-center gap-2">
                <RiSendPlane2Line size={16} /> <span>Resend</span>
              </div>
            )}
          </button>
        )}
      </>
      <div className="text-center p-4">
        <p>
          Already verified?{" "}
          <Link href={"/login"} className="text-tremor-brand">
            Login
          </Link>
        </p>
      </div>
    </Card>
  );
}
