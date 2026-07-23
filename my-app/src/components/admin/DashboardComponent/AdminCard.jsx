export const AdminCard = ({ data, handleDel, handleEdit }) => {
  const { admin_id, campuses, campus_id, name } = data;
  return (
    <>
      <tr className="hover:bg-[#F8F9FF] transition">
        <td className="px-4 py-3 text-sm font-medium text-gray-900 capitalize">
          {name}
        </td>
        <td className="px-4 py-3 text-sm text-gray-500 capitalize">
          {campuses?.name}
        </td>

        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleEdit(admin_id, name, campus_id)}
              className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition"
            >
              Edit
            </button>
            <button
              onClick={() => handleDel(admin_id)}
              className="text-xs font-medium text-red-600 border border-red-200 px-3 py-1.5 rounded-full hover:bg-red-50 transition"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
