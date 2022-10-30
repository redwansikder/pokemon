import React from 'react'

export function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr>
      <td onClick={() => onSelect(pokemon)}>{pokemon.name.english}</td>
    </tr>
  )
}
