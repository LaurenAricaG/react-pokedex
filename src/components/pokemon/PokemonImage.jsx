import { useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";

const FALLBACK_IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";

function PokemonImage({ src, alt }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative flex h-36 w-36 items-center justify-center">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      <img
        src={error ? FALLBACK_IMAGE : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        className={`h-36 object-contain transition-transform duration-300 pixeleted
          ${loading ? "opacity-0" : "opacity-100"}
          group-hover:scale-110`}
      />
    </div>
  );
}

export default PokemonImage;
