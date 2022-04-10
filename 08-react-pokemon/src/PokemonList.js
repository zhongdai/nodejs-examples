import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key="{p}"><a href={p.url}>{p.name}</a></div>
      ))}
    </div>
  );
}
