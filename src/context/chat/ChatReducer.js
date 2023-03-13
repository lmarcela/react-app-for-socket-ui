import { types } from "../../types/types";

// const initialState = {
//     uid: "",
//     chatActive: null, // UID del usuario al que yo quiero enviar mensajes
//     users: [], // Todos los usuarios de la base datos
//     messages: [], // El chat seleccionado
//   };

export const ChatReducer = (state, action) => {
  switch (action.type) {
    case types.usersLoaded:
      return {
        ...state,
        users: [...action.payload],
      };
    case types.activateChat:
      if (state.chatActive === action.payload) return state;

      return {
        ...state,
        chatActive: action.payload,
        messages: [],
      };
    default:
      return state;
  }
};
