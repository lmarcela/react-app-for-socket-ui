import React, { useState } from "react";
import { useSocket } from "./hooks/useSocket";

export const MovieAdd = () => {
  const [value, setValue] = useState("");
  const { socket } = useSocket("http://localhost:8080");

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
