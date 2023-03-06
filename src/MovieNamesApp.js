import { SocketProvider } from "./context/SocketContext";
import App from "./App";

export const MovieNamesApp = () => {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  );
};
