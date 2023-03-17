import { useForm } from "../custom-hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        value={username}
        onChange={onInputChange}
        className="form-control mt-4"
        placeholder="username"
        name="username"
      />
      <input
        type="text"
        value={email}
        onChange={onInputChange}
        className="form-control mt-4"
        placeholder="email"
        name="email"
      />
      <input
        type="password"
        value={password}
        onChange={onInputChange}
        className="form-control mt-4"
        placeholder="password"
        name="password"
      />
      <button onClick={onResetForm} className="btn btn-primary mt-4">
        Reset
      </button>
    </>
  );
};
