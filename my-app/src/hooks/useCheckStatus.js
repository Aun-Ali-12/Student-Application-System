"use client";
import { useState } from "react";

export default function useCheckStatus() {
  const [cnic, setCnic] = useState(""); //manages user input
  const [loading, setLoading] = useState(false); //loading state
  const [error, setError] = useState(""); //handle error
  const [result, setResult] = useState(null); //handle applicant's data

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    //fetching response from api route:
    try {
      const response = await fetch("/api/check-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cnic }),
      });
      const json = await response.json(); //converts received response in to json format

      //error check
      if (!response.ok) {
        setError("Student not found!");
      } else {
        setResult(json.data);
      }
    } catch (err) {
      setError("Somthing went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { cnic, setCnic, loading, error, result, handleCheck };
}
