"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import Hero from "../components/layout/Hero";
import Menu from "../components/layout/Menu";
import About from "../components/layout/About";
import ReviewPage from "../components/layout/Review";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
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
      <Hero />

      {user ? (
        <div className="font-semibold text-2xl mb-16"> Welcome! 
          <h1 className="font-normal text-lg" > {user.email} </h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Menu />
      <About />
      <ReviewPage/>
    </section>
  );
}
