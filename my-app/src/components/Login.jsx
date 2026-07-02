"use client";

import { LoginAuth } from "@/SupabaseApi/Login";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await LoginAuth(form.email, form.pass);
    console.log(response);
    if (!response.success) {
      setError(response.error);
    } else {
      window.location.replace("/dashboard");
    }
    setLoading(false);
  };

  return (
    <>
      Login form
      <form onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="email">enter your email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />

        {/* pass */}
        <label htmlFor="pass">enter your password</label>
        <input
          type="password"
          name="pass"
          value={form.pass}
          onChange={handleChange}
        />
        <br />

        <button type="submit">{loading ? "loading..." : "login"}</button>
      </form>
    </>
  );
}
