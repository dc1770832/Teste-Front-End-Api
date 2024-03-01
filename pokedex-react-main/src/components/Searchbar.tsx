// Importa a biblioteca React e a função useState
import React, { useState } from "react";

// Componente funcional que representa a barra de pesquisa
const Searchbar = (props) => {
    // Estado local para controlar o valor da pesquisa
    const [search, setSearch] = useState("dito");

    // Destrutura a função de pesquisa da propriedade passada como argumento
    const { onSearch } = props;

    // Função para lidar com a mudança no input de pesquisa
    const onChangeHandler = (e) => {
        // Atualiza o estado da pesquisa com o valor do input
        setSearch(e.target.value);

        // Chama a função de pesquisa com 'undefined' se o input estiver vazio
        if (e.target.value.length === 0) {
            onSearch(undefined);
        }
    }

    // Função para lidar com o clique no botão de busca
    const onButtonClickHandler = () => {
        // Chama a função de pesquisa com o valor atual da pesquisa
        onSearch(search);
    }

    // Retorna a estrutura da barra de pesquisa
    return (
        <div className="searchbar-container">
            {/* Input para inserir o termo de pesquisa */}
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </div>
            {/* Botão para acionar a pesquisa */}
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
        </div>
    );
}

// Exporta o componente Searchbar para ser utilizado em outros lugares do aplicativo
export default Searchbar;