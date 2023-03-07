// import io from "socket.io-client";
import { UiProvider } from "./context/UIContext";
import { RouterPage } from "./pages/RouterPage";

// const connectSocketServer = () => {
//   const socket = io.connect("http://localhost:8080", {
//     transports: ["websocket"],
//   });
//   return socket;
// };

function TicketApp() {
  // const [socket] = useState(connectSocketServer());
  // const [online, setOnline] = useState(false);
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   setOnline(socket.connected);
  // }, [socket]);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setOnline(true);
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   socket.on("disconnect", () => {
  //     setOnline(false);
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   socket.on("current-movies", (movies) => {
  //     setMovies(movies);
  //   });
  // }, [socket]);

  // const vote = (id) => {
  //   socket.emit("vote-movie", id);
  // };

  // const remove = (id) => {
  //   socket.emit("remove-movie", id);
  // };

  // const changeName = (id, name) => {
  //   socket.emit("change-name-movie", { id, name });
  // };

  // const createMovie = (name) => {
  //   socket.emit("create-movie", { name });
  // };

  return (
    <UiProvider>
      <RouterPage />
    </UiProvider>
  );
}

export default TicketApp;
