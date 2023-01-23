import React from 'react';
import { ThemeProvider } from '@mui/material';
import Home from './components/Home';
import theme from './themeConfig';
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
