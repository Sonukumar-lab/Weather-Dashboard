import AppRoutes from "./routes/AppRoutes";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <AppRoutes />
    </WeatherProvider>
  );
}

export default App;