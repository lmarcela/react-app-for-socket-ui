import { useEffect, useState } from "react";
import io from "socket.io-client";
import { MovieAdd } from "./components/MovieAdd";
import { MovieList } from "./components/MovieList";

const connectSocketServer = () => {
  const socket = io.connect("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-movies", (movies) => {
      setMovies(movies);
    });
  }, [socket]);

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
          <MovieList data={movies} />
        </div>
        <div className="col-4">
          <MovieAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
