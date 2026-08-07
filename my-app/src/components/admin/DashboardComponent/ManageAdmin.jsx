"use client";
import { FetchCampus } from "@/SupabaseApi/FetchCampus";
import { useEffect, useState } from "react";
import { AdminCard } from "./AdminCard";
import {
  CreateAdminFunc,
  DeleteAdmins,
  EditAdmin,
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
    email: "",
    password: "",
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

    //editmode false:
    if (!editMode) {
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
    }

    //editmode true:
    if (editMode) {
      //validation check
      if (
        !editData.name ||
        !editData.email ||
        !editData.password ||
        !editData.campus_id
      ) {
        alert("Add all fields");
        setLoading(false);
        return;
      }
      const response = await EditAdmin(editData);
      if (!response) {
        alert(response.error);
        return;
      }
      alert(response.success);
    }
    setLoading(false);
    setIsCreateAdmin(false);
    setEditMode(false);
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
      alert("Not deleted");
      return;
    }
    alert("deleted!");
    await loadAdmins();
  };

  //handle Edit:
  const handleEdit = (admin_id, name, campus_id) => {
    setEditMode(true);
    setIsCreateAdmin(true); // to open form
    setEditData({
      id: admin_id,
      name: name,
      email: "",
      password: "",
      campus_id: campus_id,
    });
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Admins</h1>
            <p className="text-sm text-gray-500 mt-1">
              Create, edit or remove campus admins
            </p>
          </div>
          {/* Create/Edit form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-gray-900">
                {editMode ? "Edit Admin" : "Create New Admin"}
              </h2>
              <button
                onClick={() => setIsCreateAdmin(!isCreateAdmin)}
                className="text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition"
              >
                {isCreateAdmin ? "Cancel" : "Create Admin"}
              </button>
            </div>

            {isCreateAdmin && (
              <>
                <form onSubmit={CreateAdmin} className="space-y-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Admin Name
                      </label>
                      <input
                        type="text"
                        id="adminName"
                        name="name"
                        placeholder="Admin name"
                        onChange={handleChange}
                        value={editMode ? editData.name : adminForm.name}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="text"
                        id="adminEmail"
                        name="email"
                        placeholder="admin@gmail.com"
                        onChange={handleChange}
                        value={editMode ? editData.email : adminForm.email}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Password + Campus */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Password
                      </label>
                      <input
                        type="password"
                        id="adminPass"
                        name="password"
                        placeholder="Admin password"
                        onChange={handleChange}
                        value={
                          editMode ? editData.password : adminForm.password
                        }
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Campus
                      </label>
                      <select
                        name="campus_id"
                        id="adminCampus"
                        onChange={handleChange}
                        value={
                          editMode ? editData.campus_id : adminForm.campus_id
                        }
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent bg-white transition"
                      >
                        <option value="" disabled>
                          Select campus
                        </option>
                        {campuses &&
                          campuses.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Error / Success */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                  {success && (
                    <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                      <p className="text-sm text-green-600">{success}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#5B4FCF] text-white text-sm font-medium py-3 rounded-full hover:bg-[#7B6FDF] transition disabled:opacity-60"
                  >
                    {loading
                      ? editMode
                        ? "Updating..."
                        : "Creating..."
                      : editMode
                        ? "Update Admin"
                        : "Create Admin"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Admins table */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-gray-900">
                Campus Admins
              </h2>
              <button
                onClick={handleManageAdmins}
                className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition"
              >
                {showAdmins ? "Hide" : "Show Admins"}
              </button>
            </div>

            {showAdmins && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F8F9FF] border-b border-gray-200">
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                        Name
                      </th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                        Campus
                      </th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {admins.map((a) => (
                      <AdminCard
                        key={a.admin_id}
                        data={a}
                        handleDel={handleDel}
                        handleEdit={handleEdit}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
