export const AdminCard = ({ data }) => {
  const { role, campuses } = data;
  return (
    <>
      <li>
        <p>{role}</p>
        <p>{campuses.name}</p>
      </li>
    </>
  );
};
