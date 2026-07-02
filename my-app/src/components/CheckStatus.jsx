"use client";

import { useState } from "react";

export default function CheckStatus() {
  const [cnic, setCnic] = useState(""); //manages user input
  const [loading, setLoading] = useState(false); //loading state
  const [error, setError] = useState(""); //handle error
  const [result, setResult] = useState(null); //handle applicant's data

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const response = await fetch("/api/check-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cnic }),
      });
      console.log(response);

      const json = await response.json();

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

  return (
    <>
      Check status
      <div>
        <form onSubmit={handleCheck}>
          <input
            type="text"
            placeholder="enter your cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
          />
          <button type="submit">
            {loading ? "loading..." : "Check status"}
          </button>
        </form>

        {error && <p>{error}</p>}

        {result && (
          <div>
            <p>Name: {result.full_name}</p>
            <p>Status: {result.status}</p>
            <p>Course: {result.course}</p>
          </div>
        )}
      </div>
    </>
  );
}
