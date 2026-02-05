import "./App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import PokemonsPage from "./pages/PokemonsPage";

function App() {
  return (
    <ErrorBoundary level="page">
      <PokemonsPage />
    </ErrorBoundary>
  );
}

export default App;
