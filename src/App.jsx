import { useEffect } from "react";
import { Index } from "./pages/public/index/Index";
import { PrimeReactProvider } from "primereact/api";
import { addLocaleEs } from "./config/locale";

function App() {
  useEffect(() => {
    addLocaleEs();
  }, []);
  return (
    <PrimeReactProvider value={{ locale: "es", ripple: true }}>
      <Index />;
    </PrimeReactProvider>
  );
}

export default App;
