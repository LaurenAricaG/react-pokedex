import { useEffect, useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import PokemonModal from "./components/pokemon/PokemonModal";
import usePokemonContext from "./hooks/usePokemonContext";
import PokemonsPage from "./pages/PokemonsPage";
import { Moon, Sun } from "lucide-react";

function App() {
  const { showDetailPokemon, closePokemonDetail, pokemonDetail } =
    usePokemonContext();
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <ErrorBoundary level="page">
      <PokemonsPage />
      <PokemonModal
        showModal={showDetailPokemon}
        onCloseModal={closePokemonDetail}
        pokemon={pokemonDetail}
      />

      <button
        onClick={() => setIsDark(!isDark)}
        className="
          fixed bottom-4 right-4 z-2
          p-4 rounded-full
          dark:bg-white/90 bg-slate-800/90
          dark:text-slate-600 text-slate-200
          shadow-lg backdrop-blur
          dark:hover:bg-slate-100 hover:bg-slate-700
          transition-all
          cursor-pointer
        "
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </ErrorBoundary>
  );
}

export default App;
