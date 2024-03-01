// Importa as bibliotecas necessárias do React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa os estilos do arquivo 'index.css'
import './index.css';

// Importa o componente principal 'App'
import App from './App';

// Importa a função responsável por relatar métricas da web
import reportWebVitals from './reportWebVitals';

// Cria uma raiz (root) para renderizar o aplicativo no elemento com ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente 'App' dentro de um modo estrito (StrictMode)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se desejar medir o desempenho do aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um ponto de análise.
reportWebVitals();
