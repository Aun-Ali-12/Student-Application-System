export const StdData = ({ data, role, campusName }) => {
  const { full_name, cnic } = data;
  return (
    <>
      <tr>
        <td>{full_name}</td>
        <td>{cnic}</td>
      </tr>
    </>
  );
};
