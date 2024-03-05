import React from "react";
import Messages from "./Messages"

import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
      
        <span>Aakash</span>
        <div className="chaticons">
        <i class="fa fa-camera" style={{color:"white"}}></i>
        <i class="fa fa-user" aria-hidden="true" style={{color:"white"}}></i>
     
        </div>
       
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
