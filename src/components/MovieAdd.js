import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export const MovieAdd = () => {
  const [value, setValue] = useState("");
  const { socket } = useContext(SocketContext)

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (value.trim().length > 0) {
      socket.emit("create-movie", { name: value });
    }
    setValue("");
  };
  return (
    <>
      <h3>Agregar película</h3>
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="Nuevo nombre de película"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
      </form>
    </>
  );
};
