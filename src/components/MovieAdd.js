import React, { useState } from "react";

export const MovieAdd = ({ createMovie }) => {
  const [value, setValue] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (value.trim().length > 0) {
      createMovie(value);
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
