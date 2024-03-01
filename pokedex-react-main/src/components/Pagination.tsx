// Importa a biblioteca React
import React from "react";

// Componente funcional que representa a paginação
const Pagination = (props) => {
    // Destrutura as propriedades passadas como argumentos
    const {page, totalPages, onLeftClick, onRightClick} = props

    // Retorna a estrutura da páginação
    return (
        <div className="pagination-container">
            {/* Botão para navegar para a página anterior, com um ícone de seta para a esquerda */}
            <button onClick={onLeftClick}><div>◀️</div></button>
            
            {/* Exibe a informação da página atual e o total de páginas */}
            <div>{page} de {totalPages}</div>
            
            {/* Botão para navegar para a próxima página, com um ícone de seta para a direita */}
            <button onClick={onRightClick}><div>▶️</div></button>
        </div>
    )
}

// Exporta o componente Pagination para ser utilizado em outros lugares do aplicativo
export default Pagination;