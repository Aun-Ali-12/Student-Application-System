import { useEdit } from "@/ContextApi/Edit";
import { ManageDashboard } from "@/hooks/Dashboard/useManageDashboard";
import { useState } from "react";

export const StudentDataTable = ({ data }) => {
  //student data taking from props in parent component:
  const { id, full_name, cnic, email, phone, course, status } = data;

  //hook to manage handle logic code:
  const { UpdateStatus, handleDel } = ManageDashboard();

  //edithandle from edit context
  const { handleEditStd } = useEdit();

  const [showActions, setShowActions] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  return (
    <>
      <tr className="hover:bg-[#F8F9FF] transition">
        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
          {full_name}
        </td>
        <td className="px-4 py-3 text-sm text-gray-500">{cnic}</td>
        <td className="px-4 py-3 text-sm text-gray-500">{email}</td>
        <td className="px-4 py-3 text-sm text-gray-500">{phone}</td>
        <td className="px-4 py-3 text-sm text-gray-500 capitalize">{course}</td>
        <td className="px-4 py-3 text-sm text-gray-500">
          {data.campuses?.name}
        </td>

        {/* Status */}
        <td className="px-4 py-3">
          <div className="relative">
            <button
              className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full cursor-pointer capitalize
        ${
          status === "accepted"
            ? "bg-green-50 text-green-700"
            : status === "rejected"
              ? "bg-red-50 text-red-700"
              : "bg-yellow-50 text-yellow-700"
        }
      `}
              onClick={() => {
                setShowStatus(!showStatus);
              }}
            >
              {status}
            </button>

            {showStatus && (
              <>
                {/* Backdrop — bahar click karne pe close */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowStatus(false)}
                />

                {/* Dropdown — position absolute, layout disturb nahi hoga */}
                <div className="absolute right-0 top-full mt-1 z-20 bg-white border border-gray-200 rounded-xl shadow-lg p-2 min-w-[110px]">
                  <button
                    onClick={() => UpdateStatus("rejected", id)}
                    className="text-xs text-left w-full px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 transition"
                  >
                    ✕ Reject
                  </button>
                  <button
                    onClick={() => UpdateStatus("accepted", id)}
                    className="text-xs text-left w-full px-3 py-1.5 rounded-lg text-green-600 hover:bg-green-50 transition"
                  >
                    ✓ Accept
                  </button>
                </div>
              </>
            )}
          </div>
        </td>

        {/* Actions */}
        <td className="px-4 py-3">
          <div className="relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-lg hover:bg-[#EEEDFE] transition"
            >
              Manage
            </button>

            {showActions && (
              <>
                {/* Backdrop — bahar click karne pe close */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowActions(false)}
                />

                {/* Dropdown — position absolute, layout disturb nahi hoga */}
                <div className="absolute right-0 top-full mt-1 z-20 bg-white border border-gray-200 rounded-xl shadow-lg p-2 min-w-[110px]">
                  <button
                    onClick={() => {
                      handleEditStd(data);
                      setShowActions(false);
                    }}
                    className="text-xs text-left w-full px-3 py-1.5 rounded-lg text-gray-700 hover:bg-[#EEEDFE] hover:text-[#5B4FCF] transition"
                  >
                    ✎ Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDel(id);
                      setShowActions(false);
                    }}
                    className="text-xs text-left w-full px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 transition"
                  >
                    ✕ Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};
