// Importa as bibliotecas React e useContext do React
import React, { useContext } from "react";

// Importa o contexto 'favoritePokemons' do arquivo 'favoritesContext'
import FavoriteContext from "../contexts/favoritesContext";

// Componente funcional que representa a barra de navegação
const Navbar = () => {
  // Obtém o estado dos pokémons favoritos usando o hook useContext
  const { favoritePokemons } = useContext(FavoriteContext);

  // URL da imagem do logo da PokeAPI
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  // Retorna a estrutura da barra de navegação
  return (
    <nav>
      {/* Elemento que contém a imagem do logo da PokeAPI */}
      <div>
        <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
      </div>
      {/* Elemento que exibe o número de pokémons favoritos e um emoji de coração */}
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

// Exporta o componente Navbar para ser utilizado em outros lugares do aplicativo
export default Navbar;