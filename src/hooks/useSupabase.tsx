import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";

const supabase = createClient();

export default function useSupabaseUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function inside the useEffect to fetch the user
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          // navigate to login page
          redirect("/login");
        }
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchUser();
  }, []);

  return { user, loading };
}
