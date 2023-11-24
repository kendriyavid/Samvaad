import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import favicon from "./../img/favicon.png"

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={favicon} alt="" ></img>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
