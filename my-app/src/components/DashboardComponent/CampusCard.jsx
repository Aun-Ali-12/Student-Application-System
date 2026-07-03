export const CampusCard = ({ data, handleDelete, isDelete, handleEdit }) => {
  const { id, name } = data;
  return (
    <>
      <li>
        {/* name of campus */}
        <p>{name}</p>

        {/* edit btn  */}
        <button
          onClick={() => {
            handleEdit(id, name);
          }}
        >
          edit
        </button>

        {/* delete btn  */}
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          {isDelete === id ? "deleting" : "delete"}
        </button>
      </li>
    </>
  );
};
