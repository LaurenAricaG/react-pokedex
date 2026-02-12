import axios from "axios";
import { useEffect, useState } from "react";
import PokemonImage from "./PokemonImage";
import { pokemonColorType } from "../../constans/Pokemon";

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
      onClick={() => onClick(pokemon)}
      role="button"
      tabIndex={0}
      className="group cursor-pointer rounded-2xl bg-white backdrop-blur-md p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800 border border-white/10"
    >
      <div className="relative flex justify-center rounded-2xl bg-linear-to-br p-4 from-slate-100 to-slate-200 dark:bg-linear-to-br dark:from-slate-800 dark:to-slate-950">
        <span className="absolute right-3 top-3 rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">
          {pokemon?.id && String(pokemon.id).padStart(3, "0")}
        </span>

        <PokemonImage
          src={
            pokemon?.sprites?.versions?.["generation-v"]?.["black-white"]
              ?.front_default
          }
          alt={pokemon?.name}
        />
      </div>

      <div className="px-3 pt-3">
        <div className="mb-2 flex justify-end gap-2 flex-wrap">
          {pokemon?.types.map(({ type }) => (
            <span
              key={type.name}
              className={`rounded-lg px-3 py-1 text-xs font-semibold text-white ${
                pokemonColorType[type.name] || "bg-slate-500"
              }`}
            >
              {type.name}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-slate-800 capitalize dark:text-slate-100">
          {pokemon?.name}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">Base Exp</span>
          <span className="font-semibold text-slate-800 dark:text-slate-300">
            {pokemon?.base_experience}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
          <div className="flex flex-col items-center rounded-xl bg-slate-100 dark:bg-slate-700/80  px-3 py-2 shadow-sm">
            <span className="text-slate-500 dark:text-slate-400">Height</span>
            <span className="font-semibold text-slate-800 dark:text-slate-300">
              {pokemon?.height / 10} m
            </span>
          </div>

          <div className="flex flex-col items-center rounded-xl bg-slate-100 dark:bg-slate-700/80 px-3 py-2 shadow-sm">
            <span className="text-slate-500 dark:text-slate-400">Weight</span>
            <span className="font-semibold text-slate-800 dark:text-slate-300">
              {pokemon?.weight / 10} kg
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PokemonCard;
