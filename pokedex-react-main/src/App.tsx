// Importa os módulos necessários do React e de estilos
import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoriteProvider } from "./contexts/favoritesContext";

// Chave para armazenar os favoritos no armazenamento local
const favoritesKey = "f";

// Componente principal do aplicativo
function App() {
  // Estados do aplicativo
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Número de itens por página
  const itensPerPage = 25;

  // Função para buscar os Pokémons com base na página atual
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      // Obtém dados da API PokeAPI com base na página e quantidade de itens por página
      const data = await getPokemons(itensPerPage, itensPerPage * page);

      // Mapeia os resultados e obtém detalhes de cada Pokémon
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      // Aguarda todas as promessas serem resolvidas
      const results = await Promise.all(promises);

      // Atualiza o estado com os detalhes dos Pokémons
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  // Função para carregar Pokémons favoritos do armazenamento local
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  // Efeito para carregar os Pokémons favoritos ao montar o componente
  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  // Efeito para buscar Pokémons ao alterar a página
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  // Função para atualizar a lista de Pokémons favoritos
  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);

    // Adiciona ou remove o Pokémon da lista de favoritos
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }

    // Atualiza o armazenamento local e o estado
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  // Função para lidar com a pesquisa de Pokémons
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);

    // Busca o Pokémon pela API
    const result = await searchPokemon(pokemon);

    // Verifica se o Pokémon foi encontrado
    if (!result) {
      setNotFound(true);
    } else {
      // Atualiza o estado com o Pokémon encontrado
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }

    setLoading(false);
  };

  // Renderiza o aplicativo com os componentes e o contexto de favoritos
  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        {/* Componente de barra de navegação */}
        <Navbar />
        {/* Componente de barra de pesquisa */}
        <Searchbar onSearch={onSearchHandler} />
        {/* Condicional para exibir a mensagem de não encontrado ou a Pokedex */}
        {notFound ? (
          <div className="not-found-text">Meteu essa?!</div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </FavoriteProvider>
  );
}

// Exporta o componente principal do aplicativo
export default App;