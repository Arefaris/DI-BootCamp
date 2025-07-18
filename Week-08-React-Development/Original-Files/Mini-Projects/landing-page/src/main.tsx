import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    text: {
      primary: 'rgb(27, 27, 27);', 
      secondary: 'rgb(27, 27, 27)'
    }, 
    primary: {
      light: '#fb8500',
      main: '#fb8500',
      dark: 'rgb(27, 27, 27)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
