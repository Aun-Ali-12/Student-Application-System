"use client";

import { useState } from "react";
import { LoginAuth } from "@/SupabaseApi/Login";

//Login Logic Process custom hook
export function useLogin() {
  //handles form fields
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });

  //handles loading state in form after triggering of login button
  const [loading, setLoading] = useState(false);

  //any error which will get after login click, show that message in this state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //handle used to setting up the values which're being taking out from form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //Executes on click of login button
  //logic is simple, admin logins and after getting success response admin will be moved to dashboard page.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); //set empty to error state
    setLoading(true); //set loading true

    //calling login func, defined in supabase api folder:
    const response = await LoginAuth(form.email, form.pass);
    //error check on getting response:
    if (!response.success) {
      setError(response.error);
    } else {
      //no error; send admin to dashbaord page
      setSuccess("Login succesfully!");
      window.location.replace("/dashboard");
    }
    setLoading(false); //resets loading state to its initial state
  };
  return { form, loading, error, success, handleChange, handleSubmit };
}
