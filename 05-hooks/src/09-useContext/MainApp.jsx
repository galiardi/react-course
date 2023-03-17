import { Outlet } from 'react-router-dom'; 

import { Navbar } from './Navbar';
import { UserProvider } from './context/UserContext';


export const MainApp = () => {

  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Outlet />
    </UserProvider>
  )
}
