import Modal from "../common/Modal";

function PokemonModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
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
    </Modal>
  );
}

export default PokemonModal;
