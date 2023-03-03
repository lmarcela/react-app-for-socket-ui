import React, { useEffect, useState } from "react";

export const MovieList = ({ data }) => {
  const [movies, setMovies] = useState(data);
  useEffect(() => {
    setMovies(data);
  }, [data]);

  const changeName = (event, id) => {
    const newName = event.target.value;
    setMovies((movies) =>
      movies.map((movie) => {
        if (movie.id === id) {
          movie.name = newName;
        }
        return movie;
      })
    );
  };

  const onLostFocus = (id, name) => {
    console.log(id, name);
  };
  const crearRows = () => {
    return movies.map((movie) => (
      <tr key={movie.id}>
        <td>
          <button className="btn btn-primary"> +1 </button>
        </td>
        <td>
          <input
            className="form-control"
            value={movie.name}
            onChange={(event) => changeName(event, movie.id)}
            onBlur={() => onLostFocus(movie.id, movie.name)}
          />
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
