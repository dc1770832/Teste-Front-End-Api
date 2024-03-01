// Importa funções de renderização e seleção de elementos do React Testing Library
import { render, screen } from '@testing-library/react';

// Importa o componente 'App' que será testado
import App from './App';

// Teste: verifica se o link 'Learn React' está presente no componente 'App'
test('renders learn react link', () => {
  // Renderiza o componente 'App'
  render(<App />);

  // Seleciona o elemento que contém o texto 'learn react' (case insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Verifica se o elemento foi renderizado e está presente no documento
  expect(linkElement).toBeInTheDocument();
});