export async function FetchAdmins() {
  try {
    const response = await fetch("/api/get-admins");
    const json = await response.json();

    if (!response.ok) {
      return { error: json.error };
    }
    //filters only campus admins, removes super admin
    const campusAdmins = json.success.filter((r) => r.role !== "super admin");
    return { success: campusAdmins };
  } catch (error) {
    return { error: "something went wrong" };
  }
}

export async function CreateAdminFunc(adminForm) {
  try {
    //response after fetching api route of create admin
    const response = await fetch("/api/create-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminForm),
    });

    const json = await response.json();

    if (!response.ok) {
      return { error: json.error };
    }
    return { success: json.success };
  } catch (err) {
    return { error: "something went wrong" };
  }
}

export async function DeleteAdmins(id) {
  try {
    const response = await fetch("/api/delete-admins", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    console.log(response);

    const json = await response.json();
    console.log(json, "json");

    if (!response.ok) {
      return { error: json.error };
    }
    return { success: json.success };
  } catch (err) {
    return { error: "something went wrong!" };
  }
}
