function PokemonCard({ onClick }) {
  const pokemon = {
    id: "034",
    name: "Nidoking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    category: "Drill Pokémon",
    type: ["Poison", "Grass", "Fire"],
    hp: 2475,
    cp: 2291,
    weight: "0.68m",
    weaknesses: ["Electric", "Fighting", "Water"],
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl bg-white p-4 shadow-md transition hover:scale-105 hover:shadow-xl"
    >
      {/* Imagen */}
      <div className="relative rounded-2xl bg-white p-4">
        <span className="absolute right-3 top-3 rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">
          {pokemon.id}
        </span>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto h-40 object-contain"
        />
      </div>

      {/* Info */}
      <div className="px-3 pt-3">
        <div className="flex justify-end gap-2 mb-2">
          {pokemon.type.map((t) => (
            <span
              key={t}
              className="rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold text-slate-800">{pokemon.name}</h3>

        <p className="text-sm text-slate-500 mb-2">{pokemon.category}</p>

        {/* Stats */}
        <div className="mt-3 flex gap-1 text-xs text-slate-700">
          <span className="rounded-lg bg-white px-2 py-1 shadow">
            HP {pokemon.hp}
          </span>
          <span className="rounded-lg bg-white px-2 py-1 shadow">
            CP {pokemon.cp}
          </span>
          <span className="rounded-lg bg-white px-2 py-1 shadow">
            W {pokemon.weight}
          </span>
        </div>

        {/* Weakness */}
        <div className="mt-3 flex flex-wrap gap-1">
          {pokemon.weaknesses.map((w) => (
            <span
              key={w}
              className="flex items-center gap-1 rounded-full bg-slate-200 px-3 py-1 text-xs font-normal text-slate-700"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
