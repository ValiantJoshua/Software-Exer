"use client"; // Mark this as a Client Component

import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient"; // Adjust the import based on your structure

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage(
          "Registration successful! Please check your email for confirmation."
        );
      }
    } catch (err) {
      setMessage(`Unexpected error: ${err.message}`);
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold my-8">
        Register
      </h1>

      <form onSubmit={handleSubmit} className="block max-w-xs mx-auto">
        <div className="my-4">
          <p className="font-semibold text-xl">Create your Account</p>
          <p className="text-gray-500 font-semibold text-base">
            Enter your email and create your password
          </p>
        </div>
        <p className="font-semibold text-gray-700">Email</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <p className="font-semibold text-gray-700">Password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button
          className="mt-4 bg-primary text-white font-semibold p-2 rounded w-full hover:bg-yellow-500"
          type="submit"
        >
          Register
        </button>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </form>
    </section>
  );
}
