import "./App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import PokemonModal from "./components/pokemon/PokemonModal";
import usePokemonContext from "./hooks/usePokemonContext";
import PokemonsPage from "./pages/PokemonsPage";

function App() {
  const { showDetailPokemon, closePokemonDetail, pokemonDetail } =
    usePokemonContext();

  return (
    <ErrorBoundary level="page">
      <PokemonsPage />
      <PokemonModal
        showModal={showDetailPokemon}
        onCloseModal={closePokemonDetail}
        pokemon={pokemonDetail}
      />
    </ErrorBoundary>
  );
}

export default App;
