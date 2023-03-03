import React, { useEffect, useState } from "react";

export const MovieList = ({ data }) => {
  const [movies, setMovies] = useState(data);
  useEffect(() => {
    setMovies(data)
  }, [data])
  
  const crearRows = () => {
    return movies.map((movie) => (
      <tr key={movie.id}>
        <td>
          <button className="btn btn-primary"> +1 </button>
        </td>
        <td>
          <input className="form-control" value={movie.name} />
        </td>
        <td>
          <h3>{movie.votes}</h3>
        </td>
        <td>
          <button className="btn btn-danger">Borrar</button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{crearRows()}</tbody>
      </table>
    </>
  );
};
