"use client";

import {
  AddCampus,
  DeleteCampus,
  UpdateCampus,
} from "@/SupabaseApi/Dashboard/ManageCampus";
import { FetchCampus } from "@/SupabaseApi/FetchCampus";
import { useState } from "react";
import { CampusCard } from "./CampusCard";

export default function ClientCampus() {
  const [newCampus, setNewCampus] = useState("");
  const [campuses, setCampuses] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [editVal, setEditVal] = useState(""); //handles edit value
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    if (isEdit) {
      setEditVal(e.target.value);
    } else {
      setNewCampus(e.target.value);
    }
  };

  //add campus handle
  const addCampus = async (e) => {
    e.preventDefault();
    if (!isEdit) {
      setIsAdded(true);
      try {
        const addCampusFunc = await AddCampus(newCampus);
        if (!addCampusFunc) {
          alert(addCampusFunc.error);
          return;
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAdded(false);
        setNewCampus("");
      }
    }
    if (isEdit) {
      console.log("editing kareyngay");
      const response = await UpdateCampus(editId, editVal);
      if (!response) {
        console.log(response.error);
        return;
      }
      alert("Campus Updated successfully..");
      console.log(response);
      setIsEdit(false);
      setEditVal("");
      await loadCampuses();
    }
  };

  //loading campuses
  const loadCampuses = async () => {
    setIsShow(!isShow);
    const response = await FetchCampus();
    setCampuses(response.data || []);
  };

  //delete campus handle
  const handleDelete = async (id) => {
    setIsDelete(id);
    const response = await DeleteCampus(id);
    if (!response) {
      console.log(response.error);
      return;
    }
    setIsDelete(null);
    await loadCampuses();
  };

  //edit campus handle:
  const handleEdit = (id, cname) => {
    console.log(id, cname);
    setIsEdit(true);
    setEditVal(cname);
    setEditId(id);
  };

  return (
    <>
      <div>
        <h1>Manage campus</h1>

        {/* add campus form  */}
        <form onSubmit={addCampus}>
          <label htmlFor="c-name">enter campus name:</label>
          <input
            type="text"
            value={isEdit ? editVal : newCampus}
            onChange={handleChange}
          />
          <br />
          {isEdit ? (
            <button type="submit">Update</button>
          ) : (
            <button type="submit">{isAdded ? "loading.." : "Add"}</button>
          )}
        </form>

        {/* remove button  */}
        <div>
          <h1>Existing Campuses</h1>
          <button onClick={loadCampuses}>
            {isShow ? "X" : "Show campuses"}
          </button>
          {isShow &&
            campuses &&
            campuses.map((c) => (
              <ul key={c.id}>
                <CampusCard
                  data={c}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  isDelete={isDelete}
                />
              </ul>
            ))}
        </div>
      </div>
    </>
  );
}
