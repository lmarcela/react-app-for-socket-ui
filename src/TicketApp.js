import { SocketProvider } from "./context/SocketContext";
import { UiProvider } from "./context/UIContext";
import { RouterPage } from "./pages/RouterPage";

function TicketApp() {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  );
}

export default TicketApp;
