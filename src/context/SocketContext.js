import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { scrollToBottomAnimated } from "../helpers/scrollToBottom";
import { useSocket } from "../hooks/useSocket";
import { types } from "../types/types";
import { ChatContext } from "./chat/ChatContext";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    "http://localhost:8080"
  );
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  useEffect(() => {
    socket?.on("user-list", (users) => {
      dispatch({
        type: types.usersLoaded,
        payload: users,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("personal-message", (message) => {
      dispatch({
        type: types.newMessage,
        payload: message,
      });

      scrollToBottomAnimated("messages");
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
