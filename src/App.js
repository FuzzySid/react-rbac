import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import Employee from './pages/Employee';
import roles from './roles';
import Unauthorized from './pages/Unauthorized';
import rolesConfig from './rolesConfig';
import { useAserto } from '@aserto/aserto-react'
import useAuth from './hooks/useAuth';
import Navbar from './components/Navbar';


function App() {

  // Global user state that contains user info and user role. This should ideally be in context
  const [currentUser,setCurrentUser]=useState(sessionStorage.user?JSON.parse(sessionStorage.user):null);
  const isAllowed=(role)=>{
   const allowdRoutes=rolesConfig[currentUser.role].routes.map(route=>route.component)
   if(allowdRoutes.includes(role)) return true;
   else return false;
  }
  const {isLoading,isAuthenticated,getAccessToken}=useAuth();

 
  return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
              
              {
                !currentUser? <Route path="/" element={<Home setCurrentUser={setCurrentUser} />} /> :
                <>
                <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/admin" element={isAllowed(roles.Admin)?<Admin currentUser={currentUser}/>: <Unauthorized/>} />
                <Route path="/manager" element={isAllowed(roles.Manager)?<Manager currentUser={currentUser}/>: <Unauthorized/>} />
                <Route path="/employee" element={isAllowed(roles.Employee)?<Employee currentUser={currentUser}/>:<Unauthorized/>} />
                </>
              }
              <Route path="*" element={<Home setCurrentUser={setCurrentUser} />} />
    
            </Routes>
        </BrowserRouter>
      );
    }

// }

export default App;
