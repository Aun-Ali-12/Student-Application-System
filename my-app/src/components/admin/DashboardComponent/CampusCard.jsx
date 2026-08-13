export const CampusCard = ({ data, handleDelete, isDelete, handleEdit }) => {
  const { id, name } = data;
  return (
    <>
      <tr className="hover:bg-[#F8F9FF] transition">
        {/* Campus name */}
        <td className="px-4 py-3 text-sm font-medium text-gray-900 capitalize">
          {name}
        </td>

        {/* Buttons */}
        <td className="flex gap-2 px-4 py-3 text-sm font-medium text-gray-900 capitalize">
          <button
            onClick={() => handleEdit(id, name)}
            className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="text-xs font-medium text-red-600 border border-red-200 px-3 py-1.5 rounded-full hover:bg-red-50 transition"
          >
            {isDelete === id ? "Deleting..." : "Delete"}
          </button>
        </td>
      </tr>
    </>
  );
};
