import axios from "axios";
import { useEffect, useState } from "react";

const TYPE_COLORS = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400 text-slate-900",
  poison: "bg-purple-500",
  bug: "bg-lime-500",
  normal: "bg-slate-400",
  fighting: "bg-orange-600",
  psychic: "bg-pink-500",
  rock: "bg-stone-500",
  ground: "bg-amber-600",
  ghost: "bg-indigo-600",
  ice: "bg-cyan-400 text-slate-900",
  dragon: "bg-indigo-800",
  dark: "bg-slate-800",
  steel: "bg-gray-400 text-slate-900",
  fairy: "bg-pink-300 text-slate-900",
};

function PokemonCard({ onClick, pokemonURL }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="group cursor-pointer rounded-2xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative flex justify-center rounded-2xl bg-linear-to-br from-slate-100 to-slate-200 p-4">
        <span className="absolute right-3 top-3 rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">
          {pokemon?.id && String(pokemon.id).padStart(3, "0")}
        </span>

        <img
          src={
            pokemon?.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt={pokemon?.name}
          className="h-36 object-contain transition-transform group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="px-3 pt-3">
        {/* Types */}
        <div className="mb-2 flex justify-end gap-2 flex-wrap">
          {pokemon?.types.map(({ type }) => (
            <span
              key={type.name}
              className={`rounded-lg px-3 py-1 text-xs font-semibold text-white ${
                TYPE_COLORS[type.name] || "bg-slate-500"
              }`}
            >
              {type.name}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-slate-800 capitalize">
          {pokemon?.name}
        </h3>

        {/* Experience */}
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-slate-500">Base Exp</span>
          <span className="font-semibold text-slate-800">
            {pokemon?.base_experience}
          </span>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
          <div className="flex flex-col items-center rounded-xl bg-slate-100 px-3 py-2 shadow-sm">
            <span className="text-slate-500">Height</span>
            <span className="font-semibold text-slate-800">
              {pokemon?.height / 10} m
            </span>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-slate-100 px-3 py-2 shadow-sm">
            <span className="text-slate-500">Weight</span>
            <span className="font-semibold text-slate-800">
              {pokemon?.weight / 10} kg
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PokemonCard;
