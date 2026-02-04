import { useState } from "react";
import PokemonList from "../components/pokemon/PokemonList";
import PokemonModal from "../components/pokemon/PokemonModal";
import PokemonSearch from "../components/pokemon/PokemonSearch";

function PokemonsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 px-7 py-5">
      <h1 className="pb-2 text-center text-3xl font-semibold text-slate-800">
        Lista de Pokémon
      </h1>

      <p className="mb-6 text-center text-slate-500">
        Encuentra tu Pokémon favorito
      </p>

      <div className="mx-auto max-w-7xl">
        <PokemonSearch />
        <PokemonList onCardClick={() => setOpen(true)} />
      </div>

      <PokemonModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default PokemonsPage;
