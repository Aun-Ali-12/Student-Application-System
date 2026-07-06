export const AdminCard = ({ data, handleDel, handleEdit }) => {
  const { admin_id, campuses, campus_id, name } = data;
  return (
    <>
      <tr>
        <td className="border border-gray-300 px-4 py-2">{name}</td>
        <td className="border border-gray-300 px-4 py-2">{campuses.name}</td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            onClick={() => {
              handleEdit(admin_id, name, campus_id);
            }}
            className="border border-gray-300 px-4 py-2 cursor-pointer hover:border-blue-400"
          >
            edit
          </button>
          <button
            onClick={() => {
              handleDel(admin_id);
            }}
            className="border border-gray-300 px-4 py-2 cursor-pointer hover:border-blue-400"
          >
            del
          </button>
        </td>
      </tr>
    </>
  );
};
