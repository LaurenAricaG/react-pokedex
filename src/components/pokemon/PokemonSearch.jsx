import { Search } from "lucide-react";

function PokemonSearch({ onChange }) {
  return (
    <div className="mx-auto mb-6 max-w-md">
      <div className="relative w-full">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
        />

        <input
          onChange={onChange}
          type="text"
          placeholder="Buscar Pokémon..."
          autoComplete="off"
          className="
            w-full rounded-xl border border-slate-300
            bg-slate-100 py-2.5 pl-10 pr-4
            text-slate-800 placeholder-slate-500
            transition-all
            focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500
            hover:bg-slate-50
          "
        />
      </div>
    </div>
  );
}

export default PokemonSearch;
