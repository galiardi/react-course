import { useContext } from "react";
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {

  const { setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <button onClick={() => {setUser({name: 'Jhon Doe'})}} >Set User</button>
    </>
  )
}
