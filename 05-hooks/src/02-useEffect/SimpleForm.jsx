import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  // useEffect(() => {
  //   console.log("formState changed");
  // }, [formState]);

  // useEffect(() => {
  //   console.log("email changed");
  // }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        value={username}
        onChange={onInputChange}
        className="form-control"
        placeholder="username"
        name="username"
      />
      <input
        type="text"
        value={email}
        onChange={onInputChange}
        className="form-control"
        placeholder="email"
        name="email"
      />
      {username === "pablo" && <Message />}
    </>
  );
};
