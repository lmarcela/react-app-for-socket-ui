import { useEffect, useState } from "react";
import { useSocket } from "./components/hooks/useSocket";
import { MovieAdd } from "./components/MovieAdd";
import { MovieList } from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const { socket, online } = useSocket("http://localhost:8080");

  useEffect(() => {
    socket.on("current-movies", (movies) => {
      setMovies(movies);
    });
  }, [socket]);

  const vote = (id) => {
    socket.emit("vote-movie", id);
  };

  const remove = (id) => {
    socket.emit("remove-movie", id);
  };

  const changeName = (id, name) => {
    socket.emit("change-name-movie", { id, name });
  };

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>
      </div>
      <h1>MovieNames</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <MovieList
            data={movies}
            vote={vote}
            remove={remove}
            changeName={changeName}
          />
        </div>
        <div className="col-4">
          <MovieAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
