import { useContext } from "react";
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);
  // console.log('user', user);
  // console.log('setUser', setUser)
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>
      <button onClick={() => {setUser({name: 'Jhon Doe'})}} >Set User</button>
    </>
    
  )
}
