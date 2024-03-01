// Função assíncrona para buscar informações de um Pokémon específico
export const searchPokemon = async (pokemon) => {
    try {
        // Constrói a URL para a API PokeAPI com base no nome do Pokémon
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        // Faz uma requisição assíncrona para a URL e aguarda a resposta
        const response = await fetch(url);

        // Retorna os dados do Pokémon em formato JSON
        return await response.json();
    } catch (error) {
        // Registra um erro, se ocorrer, no console
        console.log("error: ", error);
    }
}

// Função assíncrona para obter uma lista de Pokémons com base em limites e deslocamentos
export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        // Constrói a URL para a API PokeAPI com base nos limites e deslocamentos fornecidos
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

        // Faz uma requisição assíncrona para a URL e aguarda a resposta
        const response = await fetch(url);

        // Retorna os dados da lista de Pokémons em formato JSON
        return await response.json();
    } catch (error) {
        // Registra um erro, se ocorrer, no console
        console.log("error: ", error);
    }
}

// Função assíncrona para obter dados de um Pokémon com base em uma URL específica
export const getPokemonData = async (url) => {
    try {
        // Faz uma requisição assíncrona para a URL e aguarda a resposta
        const response = await fetch(url);

        // Retorna os dados do Pokémon em formato JSON
        return await response.json();
    } catch (error) {
        // Registra um erro, se ocorrer, no console
        console.log("error: ", error);
    }
}