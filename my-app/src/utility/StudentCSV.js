export function exportToCSV(students) {
  // headers (Top column names in bold)

  const headers = [
    "Name",
    "CNIC",
    "Email",
    "Phone",
    "Course",
    "Campus",
    "Status",
  ];

  // applying map loop on data and storing every student's data in array and a row creates

  const rows = students.map((s) => [
    s.full_name,
    s.cnic,
    s.email,
    s.phone,
    s.course,
    s.campuses?.name || "",
    s.status,
  ]);

  // Csv strings
  const csv = [headers, ...rows] //joins header with rows
    .map((row) => row.join(",")) //joins each row values with comma
    .join("\n"); //join every row with new line

  // Blob treats csv string as actual file and type = csv
  const blob = new Blob([csv], { type: "text/csv" });

  //Download Link
  const url = URL.createObjectURL(blob); //creates file temp url
  const a = document.createElement("a"); //creates invisible link element
  a.href = url; //provide file url to link
  a.download = "students.csv"; //on download file name will be "students.csv"
  a.click(); //when a gets click run download logic
  URL.revokeObjectURL(url); //deletes temp url
}
