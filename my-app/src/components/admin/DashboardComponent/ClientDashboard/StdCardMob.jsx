import { useEdit } from "@/ContextApi/Edit";
import { ManageDashboard } from "@/hooks/Dashboard/useManageDashboard";

export function StudentCardMob({ data }) {
  const { id, full_name, status, cnic, email, course, campuses } = data;
  //hook to manage handle logic code:
  const { UpdateStatus, handleDel } = ManageDashboard();

  //edithandle from edit context
  const { handleEditStd } = useEdit();
  return (
    <>
      {/* Mobile cards — md se neeche */}
      <div
        key={id}
        className="bg-white border border-gray-200 rounded-xl p-4 space-y-2"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900 capitalize">
            {full_name}
          </span>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize
          ${
            status === "accepted"
              ? "bg-green-50 text-green-700"
              : status === "rejected"
                ? "bg-red-50 text-red-700"
                : "bg-yellow-50 text-yellow-700"
          }
        `}
          >
            {status}
          </span>
        </div>
        <div className="text-xs text-gray-500">{cnic}</div>
        <div className="text-xs text-gray-500">{email}</div>
        <div className="text-xs text-gray-500 capitalize">{course}</div>
        <div className="text-xs text-gray-500">{campuses?.name}</div>

        {/* Actions */}
        <div className="flex gap-2 pt-2 border-t border-gray-100">
          <button
            onClick={() => UpdateStatus("accepted", id)}
            className="flex-1 text-xs text-green-700 border border-green-200 py-1.5 rounded-lg hover:bg-green-50 transition"
          >
            ✓ Accept
          </button>
          <button
            onClick={() => UpdateStatus("rejected", id)}
            className="flex-1 text-xs text-red-600 border border-red-200 py-1.5 rounded-lg hover:bg-red-50 transition"
          >
            ✕ Reject
          </button>
          <button
            onClick={() => handleEditStd(data)}
            className="flex-1 text-xs text-[#5B4FCF] border border-[#5B4FCF] py-1.5 rounded-lg hover:bg-[#EEEDFE] transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDel(id)}
            className="flex-1 text-xs text-red-600 border border-red-200 py-1.5 rounded-lg hover:bg-red-50 transition"
          >
            Del
          </button>
        </div>
      </div>
    </>
  );
}
