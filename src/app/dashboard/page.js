import Cookies from "js-cookie"; // Import js-cookie library
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check for the token in the cookie
    const token = Cookies.get("supabase-token");

    if (!token) {
      // Redirect to login if no token is found
      router.push("/login");
    }
  }, [router]);

  return (
    <section className="mt-8">
      <h1 className="text-4xl text-center">Welcome to the Dashboard</h1>
      <p className="text-center mt-4">This page is protected.</p>
    </section>
  );
}
