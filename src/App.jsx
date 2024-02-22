import { Index } from "./pages/public/index/Index";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  );
}

export default App;
