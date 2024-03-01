// Importa a biblioteca React e o contexto 'FavoriteContext'
import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

// Componente funcional que representa um card de Pokémon
const Pokemon = (props) => {
    // Destrutura as propriedades passadas como argumentos
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
    const { pokemon } = props;

    // Função para manipular o clique no botão de coração (favoritar ou desfavoritar)
    const onHeartClick = () => {
        // Atualiza a lista de Pokémon favoritos ao clicar no botão de coração
        updateFavoritePokemons(pokemon.name);
    }

    // Verifica se o Pokémon atual está na lista de favoritos para definir a aparência do coração
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

    // Retorna a estrutura do card de Pokémon
    return (
        <div className="pokemon-card">
            {/* Contêiner da imagem do Pokémon */}
            <div className="pokemon-image-container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
            </div>
            {/* Corpo do card */}
            <div className="card-body">
                {/* Seção superior do card com nome e número do Pokémon */}
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                {/* Seção inferior do card com tipos do Pokémon e botão de coração */}
                <div className="card-bottom">
                    {/* Tipos do Pokémon */}
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    {/* Botão de coração para favoritar ou desfavoritar */}
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Exporta o componente Pokemon para ser utilizado em outros lugares do aplicativo
export default Pokemon;
