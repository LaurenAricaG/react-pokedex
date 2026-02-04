import PokemonCard from "./PokemonCard";

function PokemonList({ onCardClick }) {
  return (
    <div className="grid py-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
      <PokemonCard onClick={onCardClick} />
    </div>
  );
}

export default PokemonList;
