import { useContext } from "react";
import { MovieAdd } from "../components/MovieAdd";
import { MovieChart } from "../components/MovieChart";
import { MovieList } from "../components/MovieList";
import { SocketContext } from "../context/SocketContext";

function HomePage() {
  const { online } = useContext(SocketContext);

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
        <div className="col">
          <MovieChart />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <MovieList />
        </div>
        <div className="col-4">
          <MovieAdd />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
