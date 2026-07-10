import { FormUI } from "../Form";
import { useStudent } from "@/ContextApi/StudentData";
import { useStudentForm } from "@/hooks/StudentForm";
import { useEdit } from "@/ContextApi/Edit";

export const StudentDataTable = ({
  UpdateStatus,
  handleDel,
  handleLogOut,
  campusName,
  role,
}) => {
  //useStudenForm hook used for form ui component
  const { form, campuses, loading, handleChange, handleSubmit } =
    useStudentForm();

  // const { id, full_name, cnic, email, phone, course, status, campuses } = data;
  const { isEdit, handleEditStd } = useEdit();
  const { data } = useStudent();

  return (
    <>
      <div>
        <h1>Dashboard </h1>
        <button type="button" onClick={handleLogOut}>
          logout
        </button>
        <h1 className="capitalize">
          campus name:<span>{campusName}</span> <span>{role}</span>
        </h1>
      </div>

      <table className="capitalize">
        <thead>
          <tr>
            <th>name</th>
            <th>cnic</th>
            <th>email</th>
            <th>phone</th>
            <th>course</th>
            <th>campus</th>
            <th>status</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length === 0 ? (
            <tr>
              <td>No data found!</td>
            </tr>
          ) : (
            data.map((d) => (
              <tr key={d.id}>
                <td>{d.full_name}</td>
                <td>{d.cnic}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.course}</td>
                <td>{d.campuses.name}</td>
                <td className="relative group hover:cursor-pointer">
                  {d.status}
                  <div className="hidden group-hover:block absolute top-full left-0 bg-white z-10 border p-2 rounded">
                    <button
                      onClick={() => {
                        UpdateStatus("rejected", d.id);
                      }}
                    >
                      reject
                    </button>
                    <br />
                    <button
                      onClick={() => {
                        UpdateStatus("accepted", d.id);
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
                        handleDel(d.id);
                      }}
                    >
                      del
                    </button>
                    <br />
                    <button
                      onClick={() => {
                        handleEditStd(d);
                      }}
                    >
                      edit
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isEdit ? (
        <FormUI
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          campuses={campuses}
          loading={loading}
        />
      ) : (
        ""
      )}
    </>
  );
};
