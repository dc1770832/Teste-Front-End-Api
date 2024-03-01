import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

// O componente Pokedex exibe a lista de Pokémons, paginando-os e exibindo os detalhes de cada um.
const Pokedex = (props) => {
  // Destruturação das props para facilitar o acesso aos dados.
  const { pokemons, loading, page, setPage, totalPages } = props;

  // Manipuladores de clique para a paginação.
  const onLeftClickHandler = () => {
      if(page > 0) {
          setPage(page-1);
      }
  }

  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1);
      }
  }

  return (
    <div>
      {/* Cabeçalho da Pokedex */}
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        {/* Componente de paginação */}
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      </div>

      {/* Verifica se está carregando, exibe mensagem de carregamento; caso contrário, exibe a grade de Pokémons */}
      {loading ? (
        <div>Carregando pesquisa...</div>
      ) : (
        <div className="pokedex-grid">
          {/* Mapeia e renderiza cada Pokémon usando o componente Pokemon */}
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

export default Pokedex;