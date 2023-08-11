import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./context/ThemeContex";

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
