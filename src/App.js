import { MovieAdd } from "./components/MovieAdd";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          <span className="text-success"> Online</span>
          <span className="text-danger"> Offline</span>
        </p>
      </div>
      <h1>MovieNames</h1>
      <hr />
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

export default App;
