import logo from "./logo.svg";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./DashBoard/DashBoard";
import { BrowserRouter ,Route,Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="/signup" element={<Signup/>} /> 
      <Route path="/DashBoard" element={<Home/>} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
