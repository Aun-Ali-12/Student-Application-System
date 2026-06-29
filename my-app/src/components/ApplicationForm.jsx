"use client";

import { useEffect, useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    email: "",
    phone: "",
    course: "",
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form>
        {/* name input  */}
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />

        {/* cnic input  */}
        <label htmlFor="cnic">Enter your cnic:</label>
        <input
          type="text"
          id="cnic"
          name="cnic"
          value={form.cnic}
          onChange={handleChange}
        />
        <br />

        {/* email input  */}
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />

        {/* phone input  */}
        <label htmlFor="phone">Enter your phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <br />

        {/* course input  */}
        <label htmlFor="course">Enter your course:</label>
        <select
          name="course"
          id="course"
          value={form.course}
          onChange={handleChange}
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

        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Form;
