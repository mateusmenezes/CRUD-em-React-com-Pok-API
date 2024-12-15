import { useState, useEffect } from "react";
import api from "../../services/Api";
import "./home.css";
import { toast } from "react-toastify";




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
        let mylist = JSON.parse(localStorage.getItem("@pokelist"))
        mylist = mylist == null ? [] : mylist;

        const hasPokemon = mylist.some((save) => {
            return save.id === pokemon.id;
        })
        if (hasPokemon) {
            toast.error("pokemon ja está na lista de favoritos!", {
                toastId: 'unique-id'
            });
        } else {
            mylist.push(pokemon);
            localStorage.setItem("@pokelist", JSON.stringify(mylist));
            toast.success("pokemon salvo!", {
                toastId: 'unique-id'
            });
        }

    }


    if (loading) {
        
        return (
            <div className="load-pokemons">
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
                            <button className="btn-favorito" 
                            onClick={() => savePokemon(pokemon)}>Adicionar aos favoritos</button>
                        </article>
                    );
                })
                }
            </div>
        </div>
    )
}
export default Home;