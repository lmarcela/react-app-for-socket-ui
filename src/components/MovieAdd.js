import React from "react";

export const MovieAdd = () => {
  return (
    <>
      <h3>Agregar película</h3>
      <form>
        <input
          className="form-control"
          placeholder="Nuevo nombre de película"
        />
      </form>
    </>
  );
};
