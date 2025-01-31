"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import Hero from "../components/layout/Hero";
import Menu from "../components/layout/Menu";
import About from "../components/layout/About";
import ReviewPage from "../components/layout/Review";

export default function Dashboard() {
  const [loading, setLoading] = useState(true); // Track loading state
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        // Check if the user has an active session
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session) {
          // If no session, redirect to login
          router.replace("/login");
        } else {
          // If session exists, allow access to the dashboard
          setLoading(false);
        }
      } catch (err) {
        console.error("Error checking session:", err);
        router.replace("/login"); // Redirect to login on error
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <section>
      <Hero />
      <Menu />
      <About />
      
    </section>
  );
}
