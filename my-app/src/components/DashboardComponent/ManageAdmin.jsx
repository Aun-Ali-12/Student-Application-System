"use client";
import { FetchCampus } from "@/SupabaseApi/FetchCampus";
import { useEffect, useState } from "react";
import { AdminCard } from "./AdminCard";
import {
  CreateAdminFunc,
  DeleteAdmins,
  FetchAdmins,
} from "@/SupabaseApi/Dashboard/ManageAdmins";

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
  const [admins, setAdmins] = useState([]); //stores admins data after getting response from api
  const [editData, setEditData] = useState({
    id: null,
    name: "",
    campus_id: null,
  });
  const [editMode, setEditMode] = useState(false);

  async function loadAdmins() {
    const response = await FetchAdmins();
    setAdmins(response.success || []);
  }

  useEffect(() => {
    async function loadCampus() {
      const response = await FetchCampus();
      setCampuses(response.data || []);
    }
    loadCampus();
    loadAdmins();
  }, []);

  useEffect(() => {
    console.log(admins);
  }, [admins]);

  //admin data values setting on onchange handle
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (editMode) {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }

    if (!editMode) {
      setAdminForm((prev) => ({ ...prev, [name]: value }));
    }
  };

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

    const response = await CreateAdminFunc(adminForm);
    if (!response) {
      setError(response.error);
      setLoading(false);
      return;
    }
    setSuccess("Admin has been created successfully!");
    setLoading(false);
  };

  //handle manage admins
  const handleManageAdmins = async () => {
    setShowAdmins(!showAdmins);
    setError("");
    await loadAdmins(); //fetch admins
  };

  const handleDel = async (id) => {
    const response = await DeleteAdmins(id);

    if (!response) {
      console.log("Not deleted");
      return;
    }
    console.log("deleted!");
    await loadAdmins();
  };

  //handle Edit:
  const handleEdit = (admin_id, name, campus_id) => {
    console.log(admin_id, name, campus_id);
    setEditMode(true);
    setIsCreateAdmin(true); // to open form
    setEditData({
      id: admin_id,
      name: name,
      campus_id: campus_id,
    });

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
                value={editMode ? editData.name : adminForm.name}
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
                value={editMode ? editData.campus_id : adminForm.campus_id}
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
                {editMode ? "Update" : "Create admin"}
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
        <table className="border-collapse border border-grey-400 w-full">
          {showAdmins && (
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Campus name
                </th>
                <th className="border border-gray-300 px-4 py-2">actions</th>
              </tr>
            </thead>
          )}
          <tbody>
            {showAdmins &&
              admins.map((a) => (
                <AdminCard
                  key={a.admin_id}
                  data={a}
                  handleDel={handleDel}
                  handleEdit={handleEdit}
                />
              ))}
          </tbody>
        </table>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </div>
    </>
  );
}
