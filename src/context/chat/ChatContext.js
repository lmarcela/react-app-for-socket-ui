import React, { createContext, useReducer } from "react";
import { ChatReducer } from "./ChatReducer";

export const ChatContext = createContext();

const initialState = {
  uid: "",
  chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
  users: [], // Todos los usuarios de la base datos
  messages: [], // El chat seleccionado
};

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(ChatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
