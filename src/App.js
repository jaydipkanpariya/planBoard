import './App.css';

import { useEffect, useState, useContext } from "react"; 
import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
 

import { signOut } from "firebase/auth"; 
import { auth } from "./firebase";
 
 import {Navbar, Sidebar} from "./components";  
 import {Login, Register, Forgotpassword} from "./auth"; 
 import {Account, Profile, Notifications, Logs, Verifyemail, Verifyphone, Verifyprofile} from "./profile";  
 import { Dashboard, National, Zone, Depot, Territory, Dealer, Schedule } from "./domains";  

 import {About} from "./pages";  


function App({isLogout}) {

if (isLogout)
{
   signOut(auth).then(() => {
    localStorage.clear();
    setIsAuth(false);   
  });

}; 

const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); 

useEffect(() => {  
 const isAuth = localStorage.getItem('isAuth')  
  }, []); 

  const PrivateRoute = ({ element, ...rest }) => {
    const isAuth = localStorage.getItem('isAuth')  
    return isAuth =='true' ? element : <Navigate to="/login" />;
  };
  return ( 
    <>  
     <BrowserRouter>
      <div>
        <Navbar isAuth={isAuth} />
         <Sidebar isAuth={isAuth} />
        <Routes> 
          {/* <Route path="*" element={isAuth ? <Navigate to="/dashboard" /> : <Login />} />   */}
          <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <Login />} /> 

          <Route path="/login" element= {<Login setIsAuth={setIsAuth} />} />

          <Route path="/register" element={ <Register isAuth={isAuth}/> } />
          <Route path="/forgotpassword" element={isAuth ? <Forgotpassword isAuth={isAuth}/> :  <Navigate to="/login" />} /> 

          <Route path="/account" element={isAuth ? <Account isAuth={isAuth}/> :  <Navigate to="/login" />} /> 
          <Route path="/profile" element={isAuth ? <Profile isAuth={isAuth}/> :  <Navigate to="/login" />} /> 
          <Route path="/notifications" element={isAuth ? <Notifications isAuth={isAuth}/> :  <Navigate to="/login" />} />
          <Route path="/logs" element={isAuth ? <Logs isAuth={isAuth}/> :  <Navigate to="/login" />} /> 

          <Route path="/verifyphone" element={isAuth ? <Verifyphone isAuth={isAuth}/> :  <Navigate to="/login" />} /> 
          <Route path="/verifyemail" element={isAuth ? <Verifyemail isAuth={isAuth}/> :  <Navigate to="/login" />} /> 
          <Route path="/verifyprofile" element={isAuth ? <Verifyprofile isAuth={isAuth}/> :  <Navigate to="/login" />} /> 
           
          <Route path="/dashboard"element={<PrivateRoute element={<Dashboard />} />} /> 
          <Route path="/national"element={<PrivateRoute element={<National />} />} /> 
          <Route path="/zone"element={<PrivateRoute element={<Zone />} />} /> 
          <Route path="/depot"element={<PrivateRoute element={<Depot />} />} /> 
          <Route path="/territory"element={<PrivateRoute element={<Territory />} />} /> 
          <Route path="/dealer"element={<PrivateRoute element={<Dealer />} />} /> 
          <Route path="/schedule"element={<PrivateRoute element={<Schedule />} />} /> 
            
          <Route path="/about" element={isAuth ? <About isAuth={isAuth} /> : <Navigate to="/login" />} /> 

        </Routes>
      </div>
    </BrowserRouter>
    </> 
  );
}

export default App; 