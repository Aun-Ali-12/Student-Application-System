"use client"
import { ManageCampus } from "@/hooks/Dashboard/Manage-Campus/ManageCampus";
import { CampusCard } from "./CampusCard";

export default function CampusForm() {
  const {
    isEdit,
    setIsEdit,
    addCampus,
    editVal,
    isAdded,
    loadCampuses,
    isShow,
    setIsShow,
    campuses,
    newCampus,
    isDelete,
    handleChange,
    handleDelete,
    handleEdit,
  } = ManageCampus();
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manage Campuses</h1>
        <p className="text-sm text-gray-500 mt-1">
          Add, edit or remove campuses
        </p>
      </div>

      {/* Add/Edit form card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-4">
              {isEdit ? "Edit Campus" : "Add New Campus"}
            </h2>
          </div>
          <div>
            {isEdit ? (
              <button
                onClick={() => {
                  setIsEdit(false);
                  setIsShow(false);
                }}
                className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition"
              >
                Close
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <form onSubmit={addCampus} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={isEdit ? editVal : newCampus}
            onChange={handleChange}
            placeholder="Enter campus name"
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
          />
          <button
            type="submit"
            className="bg-[#5B4FCF] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#7B6FDF] transition disabled:opacity-60 whitespace-nowrap"
          >
            {isEdit ? "Update" : isAdded ? "Creating..." : "Create Campus"}
          </button>
        </form>
      </div>

      {/* Existing campuses */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-900">
            Existing Campuses
          </h2>
          <button
            onClick={loadCampuses}
            className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition"
          >
            {isShow ? "Hide" : "Show Campuses"}
          </button>
        </div>
        {isShow && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <td className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Campus Name
                  </td>
                  <td className="text-left text-xs font-semibold text-gray-500 px-4 py-3">
                    Actions
                  </td>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {campuses &&
                  campuses.map((c) => (
                    <CampusCard
                      key={c.id}
                      data={c}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                      isDelete={isDelete}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
