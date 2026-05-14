import { useState } from "react" 
import PokemonList from "./components/PokemonList"
import PokemonDetails from "./components/PokemonDetails" // Importación externa
import './App.css'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <>
      {selectedPokemon && (
        <div>
          <h2>Pokemon Seleccionado</h2>
          <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
        </div>
      )}
      <h2>Lista de Pokemons</h2>
      <PokemonList selectPokemon={setSelectedPokemon}></PokemonList>
    </>
  )
}

export default App 