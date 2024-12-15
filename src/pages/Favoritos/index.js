import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./favoritos.css";

function Favoritos() {
    const [pokemons, setPokemons] = useState([]);

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

    return (
        < div className="container" >
            <div className="pokemons">
                <h1>Minha lista de favoritos</h1>
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
                            <button className="btn-edit">Editar</button>
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