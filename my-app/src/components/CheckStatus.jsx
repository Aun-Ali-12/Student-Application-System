"use client";

import { useState } from "react";

export default function CheckStatus() {
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

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

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
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
            placeholder="CNIC daalo"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
          />
          <button type="submit">
            {loading ? "Check ho raha hai..." : "Status Check Karo"}
          </button>
        </form>

        {error && <p>{error}</p>}

        {result && (
          <div>
            <p>Name: {result.full_name}</p>
            <p>Status: {result.status}</p>
          </div>
        )}
      </div>
    </>
  );
}
