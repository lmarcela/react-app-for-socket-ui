import { AuthProvider } from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";

function ChatApp() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default ChatApp;
