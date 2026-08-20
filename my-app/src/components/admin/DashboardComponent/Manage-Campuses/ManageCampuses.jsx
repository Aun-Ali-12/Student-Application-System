import CampusForm from "./CampusForm";
export default function ClientCampus() {
  return (
    <>
      <div className="space-y-6 mt-20 md:mt-10">
        {/* campus form component  */}
        <div className="flex flex-col gap-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <CampusForm />
        </div>
      </div>
    </>
  );
}
