"use client";
import { FetchCampus } from "@/SupabaseApi/FetchCampus";
import { useEffect, useState } from "react";
import { AdminCard } from "./AdminCard";

export default function ManageAdmins() {
  const [campuses, setCampuses] = useState([]);
  const [adminForm, setAdminForm] = useState({
    name: "",
    email: "",
    password: "",
    campus_id: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCreateAdmin, setIsCreateAdmin] = useState(false);
  const [showAdmins, setShowAdmins] = useState(false);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function loadCampus() {
      const response = await FetchCampus();
      setCampuses(response.data || []);
    }
    loadCampus();
  }, []);

  useEffect(() => {
    console.log(admins);
  }, [admins]);

  const CreateAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    //validation check
    if (
      !adminForm.name ||
      !adminForm.email ||
      !adminForm.password ||
      !adminForm.campus_id
    ) {
      alert("Add all fields");
      setLoading(false);
      return;
    }

    //response after fetching api route of create admin
    const response = await fetch("/api/create-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminForm),
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setError(json.error);
      setLoading(false);
      return;
    } else {
      setSuccess("admin successfully created");
    }
    setLoading(false);
  };

  //admin data values setting on onchange handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminForm((prev) => ({ ...prev, [name]: value }));
  };

  //handle manage admins
  const handleManageAdmins = async () => {
    setShowAdmins(!showAdmins);
    setAdmins([]);
    const response = await fetch("/api/get-admins");
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
      return;
    }
    //filters only campus admins, removes super admin
    const campusAdmins = json.success.filter((r) => r.role !== "super admin");
    setAdmins(campusAdmins);
  };

  return (
    <>
      <h1>-- Manage Admins Section</h1>
      <div>
        <button
          onClick={() => {
            setIsCreateAdmin(!isCreateAdmin);
          }}
        >
          {isCreateAdmin ? "X" : "Create Admins"}
        </button>

        {isCreateAdmin && (
          <>
            <form onSubmit={CreateAdmin}>
              {/* admin name  */}
              <label htmlFor="adminName">Enter admin name</label>
              <input
                type="text"
                id="adminName"
                name="name"
                placeholder="admin name?"
                onChange={handleChange}
                value={adminForm.name}
              />
              <br />

              {/* admin email  */}
              <label htmlFor="adminEmail">Enter admin email</label>
              <input
                type="text"
                id="adminEmail"
                name="email"
                placeholder="admin@gmail.com"
                onChange={handleChange}
                value={adminForm.email}
              />
              <br />

              {/* admin pass  */}
              <label htmlFor="adminPass">Enter admin password</label>
              <input
                type="text"
                id="adminPass"
                name="password"
                placeholder="admin password?"
                onChange={handleChange}
                value={adminForm.password}
              />
              <br />

              {/* admin campus  */}
              <label htmlFor="adminCampus">Select Admin Campus</label>
              <select
                name="campus_id"
                id="adminCampus"
                onChange={handleChange}
                value={adminForm.campus_id}
              >
                <option value="" disabled>
                  select admin campus
                </option>
                {campuses &&
                  campuses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
              </select>
              <br />

              <button type="submit">
                {loading ? "loading..." : "Create admin"}
              </button>
            </form>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
          </>
        )}
      </div>

      {/* admin card component */}
      <div>
        <button onClick={handleManageAdmins}>Manage Admin</button>
        {showAdmins &&
          admins.map((a) => (
            <ul key={a.admin_id}>
              <AdminCard data={a} />
            </ul>
          ))}
      </div>
    </>
  );
}
