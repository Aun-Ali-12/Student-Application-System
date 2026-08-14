export function AdminForm({
  editMode,
  setEditMode,
  editData,
  CreateAdmin,
  isCreateAdmin,
  setIsCreateAdmin,
  formRef,
  handleChange,
  adminForm,
  campuses,
  error,
  success,
  loading,
  resetEditData,
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-gray-900">
          {editMode ? "Edit Admin" : "Create New Admin"}
        </h2>
        <button
          onClick={() => {
            setIsCreateAdmin(!isCreateAdmin);
            setEditMode(false);
            resetEditData();
          }}
          className="text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition"
        >
          {isCreateAdmin ? "Cancel" : "Create Admin"}
        </button>
      </div>

      {isCreateAdmin && (
        <>
          <form onSubmit={CreateAdmin} ref={formRef} className="space-y-4">
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
                  value={editMode ? editData.password : adminForm.password}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Campus
                </label>
                <select
                  value={editMode ? editData.campus_id : adminForm.campus_id}
                  name="campus_id"
                  id="adminCampus"
                  onChange={handleChange}
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
    </>
  );
}
