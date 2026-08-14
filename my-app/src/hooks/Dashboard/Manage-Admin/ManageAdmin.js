import { useRef, useState } from "react";
import { FetchCampus } from "@/SupabaseApi/FetchCampus";
import {
  CreateAdminFunc,
  DeleteAdmins,
  EditAdmin,
  FetchAdmins,
} from "@/SupabaseApi/Dashboard/ManageAdmins";
import Swal from "sweetalert2";

export function ManageAdmin() {
  const [campuses, setCampuses] = useState([]);
  const [adminForm, setAdminForm] = useState({
    name: "",
    email: "",
    password: "",
    campus_id: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCreateAdmin, setIsCreateAdmin] = useState(false);
  const [showAdmins, setShowAdmins] = useState(false);
  const [admins, setAdmins] = useState([]); //stores admins data after getting response from api
  const [editData, setEditData] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    campus_id: null,
  });
  const [editMode, setEditMode] = useState(false);
  const resetEditData = () => {
    setEditData({
      id: null,
      name: "",
      email: "",
      password: "",
      campus_id: null,
    });
  };
  const formRef = useRef(null);

  async function loadAdmins() {
    const response = await FetchAdmins();
    setAdmins(response.success || []);
  }

  async function loadCampus() {
    const response = await FetchCampus();
    setCampuses(response.data || []);
  }

  //admin data values setting on onchange handle
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (editMode) {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }

    if (!editMode) {
      setAdminForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const CreateAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    //editmode false:
    if (!editMode) {
      resetEditData();
      //validation check
      if (
        !adminForm.name ||
        !adminForm.email ||
        !adminForm.password ||
        !adminForm.campus_id
      ) {
        Swal.fire({
          title: "Error!",
          text: "Please make sure to fill out an empty field.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        setLoading(false);
        return;
      }
      const response = await CreateAdminFunc(adminForm);
      if (!response) {
        setError(response.error);
        setLoading(false);
        return;
      }
      Swal.fire({
        title: "Success!",
        text: "Admin created successfully!",
        icon: "success",
        confirmButtonText: "Okay",
      });
    }

    //editmode true:
    if (editMode) {
      //validation check
      if (
        !editData.name ||
        !editData.email ||
        !editData.password ||
        !editData.campus_id
      ) {
        Swal.fire({
          title: "Error!",
          text: "Please make sure to fill out an empty field.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        setLoading(false);
        return;
      }
      const response = await EditAdmin(editData);
      if (!response) {
        alert(response.error);
        return;
      }
      Swal.fire({
        title: "Success!",
        text: "Admin updated successfully!",
        icon: "success",
        confirmButtonText: "Okay",
      });
    }
    setLoading(false);
    setIsCreateAdmin(false);
    setEditMode(false);
  };

  //handle manage admins
  const handleManageAdmins = async () => {
    setShowAdmins(!showAdmins);
    setError("");
    await loadAdmins(); //fetch admins
  };

  const handleDel = async (id) => {
    const response = await DeleteAdmins(id);

    if (!response) {
      Swal.fire({
        title: "Error!",
        text: "Something wen't wrong. Try again!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }
    Swal.fire({
      title: "Success!",
      text: "Admin removed successfully!",
      icon: "success",
      confirmButtonText: "Okay",
    });
    await loadAdmins();
  };

  //handle Edit:
  const handleEdit = (admin_id, name, campus_id) => {
    setEditMode(true);
    setIsCreateAdmin(true); // to open form
    setEditData({
      id: admin_id,
      name: name,
      email: "",
      password: "",
      campus_id: campus_id,
    });
  };

  return {
    campuses,
    setCampuses,
    adminForm,
    setAdminForm,
    error,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    CreateAdmin,
    isCreateAdmin,
    setIsCreateAdmin,
    showAdmins,
    setShowAdmins,
    formRef,
    editData,
    setEditData,
    editMode,
    setEditMode,
    admins,
    setAdmins,
    loadAdmins,
    loadCampus,
    handleChange,
    handleEdit,
    handleDel,
    handleManageAdmins,
    resetEditData,
  };
}
