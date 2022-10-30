import React from 'react'

export function SinglePokemon({ name, base }) {
  return (
    <div className='SinglePokemon'>
      <h1>Name: {name.english}</h1>
      <table>
        <tbody>
          {Object.keys(base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
