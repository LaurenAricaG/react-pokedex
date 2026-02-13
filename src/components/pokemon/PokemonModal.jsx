import { X } from "lucide-react";
import PokemonDetail from "./PokemonDetail";
import { useEffect } from "react";
import { pokemonColorType } from "../../constans/Pokemon";

function PokemonModal({ showModal, onCloseModal, pokemon }) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Contenido */}
      <article
        className={`relative z-10 w-full max-w-xl rounded-2xl shadow-xl pt-24 text-center ${pokemonColorType[pokemon.types[0]]}`}
      >
        <button
          onClick={onCloseModal}
          className="absolute right-4 top-4 bg-slate-100 dark:bg-slate-700 rounded-md p-1 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <X className="w-4 h-4 text-black dark:text-white " strokeWidth={4} />
        </button>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 ">
          <PokemonDetail pokemon={pokemon} />
        </div>
      </article>
    </section>
  );
}

export default PokemonModal;
