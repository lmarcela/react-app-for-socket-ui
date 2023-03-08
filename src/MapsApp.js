import { SocketProvider } from "./context/SocketContext";
import { MapPage } from "./pages/MapPage";

function MapsApp() {
  return (
    <SocketProvider>
      <MapPage />
    </SocketProvider>
  );
}

export default MapsApp;
