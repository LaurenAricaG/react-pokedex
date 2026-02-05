import ErrorBoundary from "../common/ErrorBoundary";
import PokemonCard from "./PokemonCard";

function PokemonList({ onCardClick, pokemons }) {
  return (
    <ErrorBoundary level="component">
      <section className="grid py-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard
            onClick={onCardClick}
            key={pokemon.url}
            pokemonURL={pokemon.url}
          />
        ))}
      </section>
    </ErrorBoundary>
  );
}

export default PokemonList;
