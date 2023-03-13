import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchWithToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scrollToBottom";
import { types } from "../types/types";

export const SidebarChatItem = ({ user }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActive } = chatState;

  const onClick = async () => {
    dispatch({
      type: types.activateChat,
      payload: user.uid,
    });

    // Cargar los mensajes del chat
    const resp = await fetchWithToken(`messages/${user.uid}`);
    dispatch({
      type: types.loadMessages,
      payload: resp.messages,
    });

    scrollToBottom("messages");
  };

  return (
    <div
      className={`chat_list ${user.uid === chatActive && "active_chat"}`}
      onClick={onClick}
    >
      {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {user.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
