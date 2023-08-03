
 
import { Link } from "react-router-dom"; 

import icon from "../images/icon.png";  

const Sidebar = ({ isAuth }) => {  
  return (
    <div className="w3-sidebar w3-bar-block w3-hide-small  ">  

  <Link className="" to="dashboard"> 
  <button className="w3-bar-item w3-button w3-center w3-hover-none">
     <img src={icon} alt="" className="" style={{width: "38px"}}/> 
      <p className=" title" >Planboard </p> 
  </button>  
  </Link>

  <Link className="" to="dashboard"> 
  <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center w3-hover-none">  
     <p className=" w3-small h6" >FY-23-24 </p>
  </button>  
  </Link>

  <Link className="" to="dashboard"> 
  <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center" >
    <i className="fa fa-bar-chart "></i>
    <p className="w3-small h6">National</p>
  </button>  
  </Link> 

  <Link className="" to="zone"> 
   <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
    <i className="fa fa-bar-chart "></i>
    <p className="w3-small h6">Zone</p>
  </button>  
  </Link>

  <Link className="" to="depot"> 
  <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
    <i className="fa fa-bar-chart "></i>
    <p className="w3-small h6">Depot</p>
  </button>  
  </Link>

  <Link className="" to="territory"> 
  <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
    <i className="fa  fa-bar-chart "></i>
    <p className="w3-small h6">Territory</p>
  </button>  
  </Link>

  <Link className="" to="dealer"> 
   <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
    <i className="fa fa-bar-chart "></i>
    <p className="w3-small h6">Dealer</p>
  </button>  
  </Link>

  <Link className="" to="schedule"> 
   <button className="w3-bar-item w3-button w3-padding-xlarge  w3-center">
    <i className="fa fa-bar-chart "></i>
    <p className="w3-small h6">Schedule</p>
  </button>   
  </Link> 

</div>
  );
};

export default Sidebar;