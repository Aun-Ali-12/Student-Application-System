import { useEdit } from "@/ContextApi/Edit";
import { ManageDashboard } from "@/hooks/Dashboard/useManageDashboard";

export const StudentDataTable = ({ data }) => {
  //student data taking from props in parent component:
  const { id, full_name, cnic, email, phone, course, status } = data;

  //hook to manage handle logic code:
  const { UpdateStatus, handleDel } = ManageDashboard();

  //edithandle from edit context
  const { handleEditStd } = useEdit();

  return (
    <>
      <tr>
        <td>{full_name}</td>
        <td>{cnic}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{course}</td>
        <td>{data.campuses.name}</td>
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
