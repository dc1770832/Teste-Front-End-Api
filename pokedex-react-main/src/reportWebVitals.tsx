// Função responsável por reportar métricas de desempenho da aplicação web
const reportWebVitals = onPerfEntry => {
  // Verifica se a função de callback foi fornecida e é uma função válida
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa o módulo 'web-vitals' dinamicamente
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Registra as métricas de desempenho utilizando a função de callback fornecida
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exporta a função 'reportWebVitals' para ser utilizada em outros módulos
export default reportWebVitals;