"use client";
import {
  AddCampus,
  DeleteCampus,
  UpdateCampus,
} from "@/SupabaseApi/Dashboard/ManageCampus";
import { FetchCampus } from "@/SupabaseApi/FetchCampus";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
export function ManageCampus() {
  const [newCampus, setNewCampus] = useState("");
  const [campuses, setCampuses] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [editVal, setEditVal] = useState(""); //handles edit value
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const formRef = useRef(); //to trigger form on edit

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

    if (!isEdit) {
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
      // validation
      if (!editVal) {
        Swal.fire({
          title: "Error!",
          text: "Please make sure to fill out an empty field.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        return;
      }
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
    setNewCampus("");
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
    setIsEdit(true);
    setEditVal(cname);
    setEditId(id);
  };

  return {
    isEdit,
    setIsEdit,
    addCampus,
    editVal,
    isAdded,
    loadCampuses,
    isShow,
    setIsShow,
    campuses,
    newCampus,
    isDelete,
    handleChange,
    handleDelete,
    handleEdit,
    formRef,
  };
}
