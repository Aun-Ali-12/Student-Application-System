import { useLogin } from "@/hooks/useLogin";

//Login form component:
export const LoginForm = () => {
  const { form, loading, error, handleChange, handleSubmit } = useLogin();
  return (
    <>
      Login form
      <form onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="email">enter your email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />

        {/* pass */}
        <label htmlFor="pass">enter your password</label>
        <input
          type="password"
          name="pass"
          value={form.pass}
          onChange={handleChange}
        />
        <br />

        <button type="submit">{loading ? "loading..." : "login"}</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};
