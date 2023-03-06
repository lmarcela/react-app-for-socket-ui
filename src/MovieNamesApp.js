import { SocketProvider } from "./context/SocketContext";
import HomePage from "./pages/HomePage";

export const MovieNamesApp = () => {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
};
