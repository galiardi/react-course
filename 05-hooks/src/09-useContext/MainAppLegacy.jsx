import { Navigate, Route, Routes } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { Navbar } from './Navbar';


export const MainAppLegacy = () => {
  return (
    <UserProvider>
        <Navbar />
        <hr />


        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="login" element={ <LoginPage /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>

    </UserProvider>
  )
}
