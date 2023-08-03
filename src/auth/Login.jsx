
import { useEffect, useState, useContext } from "react";  
import { Navigate, Link, useNavigate } from "react-router-dom";

import iconGoogle from "../images/google.png";  

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";  
import { signInWithEmailAndPassword } from "firebase/auth";  

import { provider } from "../firebase"; 

 const Login = ({ setIsAuth }) => {  

 let navigate = useNavigate(); 
     
    // 1 : Login with Google
    const signInWithGoogle = () => { 
    signInWithPopup(auth, provider).
    then((result) => { 
    const credential = GoogleAuthProvider.credentialFromResult(result); 
    const token = credential.accessToken; 
    const displayName = result.user.displayName; 
    localStorage.setItem("displayName", displayName); 
    const email = result.user.email;
    localStorage.setItem("email", email);  
    const photoURL = result.user.photoURL;
    localStorage.setItem("photoURL", photoURL); 
    const user = JSON.stringify([{"displayName":displayName ,"email":email, "photoURL":photoURL}]);
    localStorage.setItem("user",user);  
    localStorage.setItem("isAuth", true); 
    setIsAuth(true);
    navigate("/");
    // window.location.pathname = "/"; 
    }); 
    }; // 1 : Ends 



    //// 2 : Login with Email Password   
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const handleLogin = (e) => {
    e.preventDefault();

     signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user; 
        console.log(user);
        setError(""); 
 
         localStorage.setItem("user", JSON.stringify(user)); 
         localStorage.setItem("isAuth", true); 
 
        setIsAuth(true);
        navigate("/");
      
      })
      .catch((error) => {
        setError(" Wrong email or password   ");
      }); 


    }; // 2 : handleLogin ends  
 
  return (
    <div className="login  w3-border w3-text-gray"> 
      
      <div className="wrapper w3-padding "> 
          <div className="w3-row  w3-padding ">   
        <div className="w3-col l5">  
          <form onSubmit={handleLogin} >

          <div className="form-group h6">  
          Registered Email 
          <input className="w3-input w3-border"
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div className="form-group h6"> 
           Password
          <input className="w3-input w3-border"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>

           <div className="form-group w3-small h6 "> 
          <p> <u>I forgot my password </u></p>
          </div>

          <div className="form-group"> 
          <button className="w3-button w3-block  w3-indigo " type="submit">Login</button>
          </div>

          <div className="form-group w3-text-red"> 
          <p>{error}</p>
          </div> 

          </form>  

          <div className="w3-small h5 w3-content w3-center w3-margin w3-padding-large "> 
          Sign in with Planboard registered account.  
          </div> 

        </div>

        <div className="center w3-col l2">
          <div className="line" />
          <div className="or w3-circle">OR</div>
        </div>

        <div className="w3-col l5 w3-right"> 

           <div className="w3-button w3-block  w3-red" onClick={signInWithGoogle}>
            <img src={iconGoogle} alt="" className="icon" />
            Sign in with Gmail
          </div> 

          <div className="w3-small h5 w3-content w3-center w3-margin w3-padding-large "> 
          Sign in with  your corporate Gmail workspace email account 
          </div> 
        </div>

        </div>
      </div>  
    </div>
  );

};

export default Login;
