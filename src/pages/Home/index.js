import { useState, useEffect } from "react";
import api from "../../services/Api";
import "./home.css";

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPokemons() {
            let response = await api.get("/pokemon/?offset=0&limit=20");
            const results = response.data.results;

            const detailedPokemons = await Promise.all(
                results.map(async (element) => {
                    const dados = await api.get(element.url);
                    return {
                        id: dados.data.id,
                        nome: dados.data.name,
                        img: dados.data.sprites.front_default,
                    };
                })
            );
            setPokemons(detailedPokemons);

            setLoading(false);

        }
        loadPokemons();
    }, []);


    function savePokemon(pokemon) {
        console.log(pokemon);
        
        let mylist = JSON.parse(localStorage.getItem("@pokelist"))
        mylist = mylist == null ? [] : mylist;

        const hasPokemon = mylist.some((save) => {
            return save.id === pokemon.id;
        })
        if (hasPokemon) {
            alert("pokemon ja esta na lista de favoritos");
        } else {
            mylist.push(pokemon);
            localStorage.setItem("@pokelist", JSON.stringify(mylist));
            alert("Pokemon salvo na lista");
        }

    }


    if (loading) {
        
        return (
            <div>
                <h1>Carregando pokemons...</h1>
            </div>
        );
    }


    return (
        <div className="container">
            <div className="pokemons">
                {pokemons.map((pokemon, index) => {
                    return (
                        <article key={index}>
                            <img src={pokemon.img} alt={pokemon.nome} />
                            <h1>{pokemon.nome} {pokemon.id}</h1>
                            <button onClick={() => savePokemon(pokemon)}>Adicionar aos favoritos</button>
                        </article>
                    )

                })
                }
            </div>
        </div>
    )
}
export default Home;