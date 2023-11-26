// Importando as bibliotecas necessárias do React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importando o ThemeProvider da biblioteca Styled Components
import { ThemeProvider } from 'styled-components';

// Importando estilos globais e o tema da aplicação
import GlobalStyles from './styles/global';
import theme from './styles/theme';

// Importando o componente Details do arquivo './pages/Details'
import { Home } from './pages/Home';

import { SignUp } from './pages/SignUp'

// Utilizando ReactDOM.createRoot para renderizar o aplicativo no elemento com id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Englobando a aplicação em React.StrictMode para detectar práticas inseguras
  <React.StrictMode>
    {/* Utilizando o ThemeProvider para aplicar o tema aos componentes estilizados */}
    <ThemeProvider theme={theme}>
      {/* Aplicando estilos globais */}
      <GlobalStyles />
      <SignUp />
      {/* Renderizando o componente Details */}
    </ThemeProvider>
  </React.StrictMode>
);
