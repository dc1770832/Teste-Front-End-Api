// Importa a biblioteca React e os componentes Pagination e Pokemon
import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

// Componente funcional que representa a Pokedex
const Pokedex = (props) => {
  // Destrutura as propriedades passadas como argumentos
  const { pokemons, loading, page, setPage, totalPages } = props;

  // Função para manipular o clique no botão de navegação para a esquerda
  const onLeftClickHandler = () => {
      if(page > 0) {
          // Reduz a página atual se não estiver na primeira página
          setPage(page-1)
      }
  }

  // Função para manipular o clique no botão de navegação para a direita
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          // Aumenta a página atual se não estiver na última página
          setPage(page+1)
      }
  }

  // Retorna a estrutura da Pokedex
  return (
    <div>
      {/* Cabeçalho da Pokedex com o título e o componente de paginação */}
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      </div>
      
      {/* Verifica se está carregando e exibe uma mensagem, caso contrário, mostra a grade de Pokémons */}
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <div className="pokedex-grid">
          {/* Mapeia a lista de Pokémons e renderiza o componente Pokemon para cada um */}
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index}  pokemon={pokemon}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Exporta o componente Pokedex para ser utilizado em outros lugares do aplicativo
export default Pokedex;