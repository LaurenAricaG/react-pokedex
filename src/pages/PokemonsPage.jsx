import { useEffect, useRef, useState } from "react";
import PokemonList from "../components/pokemon/PokemonList";
import PokemonSearch from "../components/pokemon/PokemonSearch";
import axios from "axios";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorMessage from "../components/common/ErrorMessage";
import ErrorBoundary from "../components/common/ErrorBoundary";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const INITIAL_LIMIT = 40;
const INCREASE_LIMIT = 20;

function PokemonsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const targetObserver = useRef(null);

  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;

  const pokemonByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName),
  );

  const handleChangePokemonName = (e) =>
    setPokemonName(e.target.value.toLowerCase());

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=898")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const maxPokemons = pokemonByName.length;
    if (isVisible && maxPokemons !== 0) {
      const newLimit = limit + INCREASE_LIMIT;
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
    }
  }, [isVisible]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 px-7 py-5">
      <h1 className="pb-2 text-center text-3xl font-semibold text-slate-800">
        Lista de Pokémon
      </h1>

      <p className="mb-6 text-center text-slate-500">
        Encuentra tu Pokémon favorito
      </p>

      <div className="mx-auto max-w-7xl">
        <PokemonSearch onChange={handleChangePokemonName} />
        <ErrorBoundary level="page">
          <PokemonList
            onCardClick={() => setOpen(true)}
            pokemons={pokemonByName.slice(0, limit)}
          />
        </ErrorBoundary>
      </div>
      {/* Intersection Observer */}
      <span ref={targetObserver}></span>
    </div>
  );
}

export default PokemonsPage;
