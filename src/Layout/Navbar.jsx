import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
   let loaclstorage=localStorage.clear();
    toast.info("Logout Successfully");
    window.location.href = "/";
    
  };
  return (
    <div className="navbar">
      <span className="logo">HummingBird</span>
      <div className="user">
        <img
          className="imgs"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>Aakash</span>
        <button className="button" onClickCapture={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
