import { X } from "lucide-react";

function PokemonModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Contenido */}
      <article className="relative z-10 w-full max-w-md rounded-2xl shadow-xl bg-green-400 pt-24 text-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 bg-white rounded-md p-1 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <X className="w-4 h-4 text-black " strokeWidth={4} />
        </button>

        <div className="bg-white rounded-2xl p-5">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
            className="mx-auto h-40"
          />

          <h2 className="mt-4 text-2xl font-bold text-slate-800">Pikachu</h2>

          <p className="mt-1 text-slate-500">Electric Pokémon</p>

          <div className="mt-4 flex justify-center gap-3">
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
              Electric
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default PokemonModal;
