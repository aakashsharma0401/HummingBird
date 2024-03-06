import logo from "./logo.svg";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./DashBoard/DashBoard";
import PrivateRoute from "./Routes/PrivateRoutes";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="/signup" element={<Signup/>} /> 
      <Route path="/forgot" element={<ForgotPassword/>} />
      <Route path="/DashBoard" element={<PrivateRoute Component={Home}/>} /> 
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
