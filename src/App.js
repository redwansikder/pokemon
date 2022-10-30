import React from 'react'
import './App.css'
import pokemon from './pokemon.json'
import { SinglePokemon } from './components/SinglePokemon'
import { PokemonRow } from './components/PokemonRow'

function App() {
  const [search, setSearch] = React.useState('')
  const [selPoke, setSelPokemon] = React.useState(null)
  return (
    <div className='App'>
      <h1>Pokemon API frontend.</h1>
      <input
        placeholder='Enter Pokemon name:'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div className='grid'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemon
              .filter((poke) =>
                poke.name.english.toLowerCase().includes(search.toLowerCase())
              )
              .slice(0, 15)
              .map((pokemon) => (
                <PokemonRow
                  key={pokemon.id}
                  pokemon={pokemon}
                  onSelect={(pokemon) => setSelPokemon(pokemon)}
                />
              ))}
          </tbody>
        </table>
        <div>
          {selPoke ? (
            <SinglePokemon {...selPoke} />
          ) : (
            <h1 style={{ textAlign: 'left' }}>Click a Pokemon's name.</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
