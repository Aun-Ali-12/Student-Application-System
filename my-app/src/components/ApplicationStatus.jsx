import useCheckStatus from "@/hooks/useCheckStatus";

//Application status checker component
export const ApplicationStatus = () => {
  const { cnic, setCnic, loading, error, result, handleCheck } =
    useCheckStatus();
  return (
    <>
      Check status
      <div>
        <form onSubmit={handleCheck}>
          <input
            type="text"
            placeholder="enter your cnic"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
          />
          <button type="submit">
            {loading ? "loading..." : "Check status"}
          </button>
        </form>

        {error && <p>{error}</p>}

        {result && (
          <div>
            <p>Name: {result.full_name}</p>
            <p>Status: {result.status}</p>
            <p>Course: {result.course}</p>
          </div>
        )}
      </div>
    </>
  );
};
