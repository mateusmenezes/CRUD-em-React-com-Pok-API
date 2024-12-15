import { useEffect, useState } from "react";


function Favoritos() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const mylist = JSON.parse(localStorage.getItem("@pokelist"));
        setPokemons(mylist || []);
    }, [])


    function deletePokemon(id) {
        console.log(id);

        let filterPokemons= pokemons.filter((item) => {
            return (item.id !== id);
        });
        
        setPokemons(filterPokemons);
        

        localStorage.setItem("@pokelist", JSON.stringify(filterPokemons));
        console.log(`depois do local: ${pokemons}`);
        
    }

    return (
        <div className="container">
            <div className="pokemons">
                {pokemons.map((pokemon, index) => {
                    return (
                        <article key={index}>
                            <img src={pokemon.img} alt={pokemon.nome} />
                            <h1>{pokemon.nome} {pokemon.id}</h1>
                            <button>Editar</button>
                            <button onClick={() => deletePokemon(pokemon.id)}>Deletar</button>
                        </article>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Favoritos;