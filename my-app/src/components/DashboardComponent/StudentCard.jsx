import { useEdit } from "@/ContextApi/Edit";

export const StdData = ({ data, UpdateStatus, handleDel }) => {
  const { id, full_name, cnic, email, phone, course, status, campuses } = data;
  const { handleEditStd } = useEdit();
  return (
    <>
      <tr>
        <td>{full_name}</td>
        <td>{cnic}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{course}</td>
        <td>{campuses.name}</td>
        <td className="relative group hover:cursor-pointer">
          {status}
          <div className="hidden group-hover:block absolute top-full left-0 bg-white z-10 border p-2 rounded">
            <button
              onClick={() => {
                UpdateStatus("rejected", id);
              }}
            >
              reject
            </button>
            <br />
            <button
              onClick={() => {
                UpdateStatus("accepted", id);
              }}
            >
              accept
            </button>
          </div>
        </td>
        <td className="relative group">
          <button className="hover:cursor-pointer">manage</button>
          <div className="hidden group-hover:block absolute top-full left-0 bg-white z-10 border p-2 rounded">
            <button
              onClick={() => {
                handleDel(id);
              }}
            >
              del
            </button>
            <br />
            <button
              onClick={() => {
                handleEditStd(data);
              }}
            >
              edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};
