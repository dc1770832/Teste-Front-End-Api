// Importa o logo do arquivo 'logo.svg' e os estilos do arquivo 'App.css'
import logo from './logo.svg';
import './App.css';

// Componente funcional principal do aplicativo React
function App() {
  return (
    // Estrutura principal do componente, com a classe 'App'
    <div className="App">
      {/* Cabeçalho do aplicativo com a classe 'App-header' */}
      <header className="App-header">
        {/* Imagem do logo do aplicativo com a classe 'App-logo' e um texto alternativo 'logo' */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Parágrafo com instruções de edição do arquivo 'src/App.js' */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Link para a documentação do React com a classe 'App-link' */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Exporta o componente 'App' para ser usado em outros lugares do aplicativo
export default App;