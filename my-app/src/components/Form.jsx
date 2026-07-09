import { useEdit } from "@/ContextApi/Edit";

export const FormUI = ({
  form,
  handleChange,
  handleSubmit,
  campuses,
  loading,
}) => {
  const { editData, isEdit, setIsEdit, resetEdit } = useEdit();
  return (
    <>
      Form
      <form onSubmit={handleSubmit}>
        {/* name input  */}
        <label htmlFor="full_name">Enter your name:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={isEdit ? editData.full_name : form.full_name}
          onChange={handleChange}
          placeholder="enter your name"
          required
        />
        <br />

        {/* cnic input  */}
        <label htmlFor="cnic">Enter your cnic:</label>
        <input
          type="text"
          id="cnic"
          name="cnic"
          value={isEdit ? editData.cnic : form.cnic}
          onChange={handleChange}
          placeholder="enter your cnic"
          required
        />
        <br />

        {/* email input  */}
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={isEdit ? editData.email : form.email}
          onChange={handleChange}
          placeholder="enter your email"
          required
        />
        <br />

        {/* phone input  */}
        <label htmlFor="phone">Enter your phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={isEdit ? editData.phone : form.phone}
          onChange={handleChange}
          placeholder="enter your phone"
          required
        />
        <br />

        {/* course input  */}
        <label htmlFor="course">Enter your course:</label>
        <select
          name="course"
          id="course"
          value={isEdit ? editData.course : form.course}
          onChange={handleChange}
          required
        >
          <option value="">select your course</option>
          <option value="ai and chatbot development">
            ai and chatbot development
          </option>
          <option value="web and app development">
            web and app development
          </option>
          <option value="digital marketing">digital marketing</option>
        </select>
        <br />

        {/* campus input  */}
        <label htmlFor="campus">Enter your campus:</label>
        <select
          name="campus_id"
          id="campus"
          value={isEdit ? editData.campus_id : form.campus_id}
          onChange={handleChange}
          required
        >
          <option value="">select your campus</option>

          {campuses &&
            campuses.map((val) => (
              <option key={val.id} value={val.id}>
                {val.name}
              </option>
            ))}
        </select>
        <br />

        {isEdit ? (
          <>
            <button type="submit">{loading ? "updating..." : "update"}</button>
            <button
              type="button"
              onClick={() => {
                (setIsEdit(false), resetEdit());
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button type="submit">{loading ? "submitting..." : "submit"}</button>
        )}
      </form>
    </>
  );
};
