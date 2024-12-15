import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./favoritos.css";

function Favoritos() {
    const [pokemons, setPokemons] = useState([]);
    const [editPokemon, setEditPokemon] = useState(null); // Estado para gerenciar o pokemon sendo editado
    const [newName, setNewName] = useState(""); // Estado para o novo nome

    useEffect(() => {
        const mylist = JSON.parse(localStorage.getItem("@pokelist"));
        setPokemons(mylist || []);
    }, []);


    function deletePokemon(id) {
        let filterPokemons = pokemons.filter((item) => {
            return (item.id !== id);
        });

        setPokemons(filterPokemons);

        localStorage.setItem("@pokelist", JSON.stringify(filterPokemons));
        toast.success("pokemon salvo!", {
            toastId: 'unique-id'
        });
    }

    function editPokemonName(id) {

        const pokemon = pokemons.find(item => item.id === id);
        setEditPokemon(pokemon);
        setNewName(pokemon.nome);
    }

    function saveEditedName() {
        const updatedPokemons = pokemons.map(pokemon => {
            if (pokemon.id === editPokemon.id) {
                pokemon.nome = newName; // Atualiza o nome do Pokémon
            }
            return pokemon;
        });

        setPokemons(updatedPokemons);
        localStorage.setItem("@pokelist", JSON.stringify(updatedPokemons));

        setEditPokemon(null);
        setNewName("");
        toast.success("Nome do Pokémon atualizado!", {
            toastId: 'unique-id'
        });
    }


    return (
        < div className="container" >
            <div className="pokemons">
                <h1>Minha lista de favoritos</h1>
                {editPokemon && (
                    <div className="edit-popup">
                        <h2>Editar Pokémon</h2>
                        <input
                            className="input-edit"
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        <button className="btn-save" onClick={saveEditedName}>Salvar</button>
                        <button className="btn-cancel" onClick={() => setEditPokemon(null)}>Cancelar</button>
                    </div>
                )}
                {
                    pokemons.length === 0 &&
                    <div className="info">
                        <span>Você não possui pokemons salvos na sua lista de favoritos!</span>
                    </div>
                }
                {pokemons.map((pokemon, index) => {
                    return (
                        <article key={index}>
                            <img src={pokemon.img} alt={pokemon.nome} />
                            <h1>{pokemon.nome} {pokemon.id}</h1>
                            <button className="btn-edit" onClick={() => editPokemonName(pokemon.id)}>Editar</button>
                            <button className="btn-delete" onClick={() => deletePokemon(pokemon.id)}>Deletar</button>

                        </article>
                    );
                })
                }
            </div>
        </div >
    )
}

export default Favoritos;