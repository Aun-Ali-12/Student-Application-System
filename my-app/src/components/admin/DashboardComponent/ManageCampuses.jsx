"use client";

import {
  AddCampus,
  DeleteCampus,
  UpdateCampus,
} from "@/SupabaseApi/Dashboard/ManageCampus";
import { FetchCampus } from "@/SupabaseApi/FetchCampus";
import { useState } from "react";
import { CampusCard } from "./CampusCard";
import Swal from "sweetalert2";

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

  //loading campuses
  const loadCampuses = async () => {
    setIsShow(!isShow);
    const response = await FetchCampus();
    setCampuses(response.data || []);
  };

  //add campus handle
  const addCampus = async (e) => {
    e.preventDefault();

    // validation
    if (!newCampus) {
      Swal.fire({
        title: "Error!",
        text: "Please make sure to fill out an empty field.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }

    if (!isEdit) {
      setIsAdded(true);
      try {
        const addCampusFunc = await AddCampus(newCampus);
        if (!addCampusFunc) {
          Swal.fire({
            title: "Error!",
            text: "Couldn't created, Please try again!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
          return;
        }
        Swal.fire({
          title: "Success!",
          text: "Campus added successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } finally {
        setIsAdded(false);
        setNewCampus("");
      }
    }
    if (isEdit) {
      const response = await UpdateCampus(editId, editVal);
      if (!response) {
        console.log(response.error);
        return;
      }
      Swal.fire({
        title: "Success!",
        text: "Campus updated successfully!",
        icon: "success",
        confirmButtonText: "Okay",
      });
      setIsEdit(false);
      setEditVal("");
      await loadCampuses();
    }
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
    Swal.fire({
      title: "Success!",
      text: "Campus deleted successfully!",
      icon: "success",
      confirmButtonText: "Okay",
    });
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
      <div className="space-y-6 mt-20 md:mt-10">
        {/* Header */}
        <div className="flex flex-col gap-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Manage Campuses
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Add, edit or remove campuses
            </p>
          </div>

          {/* Add/Edit form card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
              {isEdit ? "Edit Campus" : "Add New Campus"}
            </h2>

            <form
              onSubmit={addCampus}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="text"
                value={isEdit ? editVal : newCampus}
                onChange={handleChange}
                placeholder="Enter campus name"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FCF] focus:border-transparent transition"
              />
              <button
                type="submit"
                className="bg-[#5B4FCF] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#7B6FDF] transition disabled:opacity-60 whitespace-nowrap"
              >
                {isEdit ? "Update" : isAdded ? "Creating..." : "Create Campus"}
              </button>
            </form>
          </div>

          {/* Existing campuses */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">
                Existing Campuses
              </h2>
              <button
                onClick={loadCampuses}
                className="text-xs font-medium text-[#5B4FCF] border border-[#5B4FCF] px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition"
              >
                {isShow ? "Hide" : "Show Campuses"}
              </button>
            </div>

            {isShow && (
              <ul className="space-y-2">
                {campuses &&
                  campuses.map((c) => (
                    <CampusCard
                      key={c.id}
                      data={c}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                      isDelete={isDelete}
                    />
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
