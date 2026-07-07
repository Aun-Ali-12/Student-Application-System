"use client";

import { LogOut } from "@/SupabaseApi/Login";
import { StdData } from "./StdData";

export default function Dashboard({ data, role, campusName }) {
  const handleLogOut = async () => {
    const response = await LogOut();
    if (!response) {
      alert("Logout failed, please try again");
      return;
    }
    alert("logging out");
    window.location.replace("/login");
  };

  return (
    <>
      Dashboard
      <button type="button" onClick={handleLogOut}>
        logout
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>cnic</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length === 0 ? (
            <p>No data found!</p>
          ) : (
            data.map((d) => (
              <StdData
                key={d.id}
                data={d}
                role={role}
                campusName={campusName}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
