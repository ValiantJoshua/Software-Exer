"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
      }
    };

    getSession();
  }, [router]);

  return (
    <section>
      {user ? (
        <div>
          <h1>Welcome to the Dashboard, {user.email}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
