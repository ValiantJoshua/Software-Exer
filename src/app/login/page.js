"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import js-cookie library

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else if (data.session) {
      // Store the session token in a cookie
      Cookies.set("supabase-token", data.session.access_token, { expires: 1 }); // Expires in 1 day
      router.push("/dashboard"); // Redirect to the dashboard
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold my-4">
        Login
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleLogin}>
        <p className="font-semibold text-gray-700">Email</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border"
        />
        <p className="font-semibold text-gray-700 mt-4">Password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border"
        />
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        <div className="text-gray-500 flex my-4 justify-center">
          Don't have an account?
          <a
            href="/register"
            className="font-semibold text-gray-900 ml-1 hover:text-gray-600"
          >
            Register
          </a>
        </div>
        {message && <p className="text-red-500 mt-4">{message}</p>}
      </form>
    </section>
  );
}
