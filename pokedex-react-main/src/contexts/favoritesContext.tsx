// Importa a biblioteca React
import React from "react";

// Criação de um contexto com valores padrão
const FavoriteContext = React.createContext({
    favoritePokemons: [],                  // Lista de Pokémons favoritos
    updateFavoritePokemons: (id) => null   // Função para atualizar a lista de Pokémons favoritos
});

// Exporta o provedor de contexto para ser utilizado em outras partes do aplicativo
export const FavoriteProvider = FavoriteContext.Provider;

// Exporta o contexto 'FavoriteContext' para ser utilizado em outros lugares do aplicativo
export default FavoriteContext;
