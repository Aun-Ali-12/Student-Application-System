"use client";

import { FetchCampus, InsertStudents } from "@/SupabaseApi/FetchCampus";

import { useEffect, useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    cnic: "",
    email: "",
    phone: "",
    course: "",
    campus_id: "",
  });
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCampus() {
      const response = await FetchCampus();
      setCampuses(response.data || []);
    }
    loadCampus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await InsertStudents(form);
      if (response) {
        alert("Data is submitted");
        setForm({
          name: "",
          cnic: "",
          email: "",
          phone: "",
          course: "",
          campus_id: "",
        });
      }
    } catch (err) {
      console.log("didn't get the response from function", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* name input  */}
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
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
          value={form.cnic}
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
          value={form.email}
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
          value={form.phone}
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
          value={form.course}
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
        <label htmlFor="campus">Enter your course:</label>
        <select
          name="campus_id"
          id="campus"
          value={form.campus_id}
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

        <button type="submit">{loading ? "submitting..." : "submit"}</button>
      </form>
    </>
  );
}
export default Form;
