import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/menu.js'
import { MathJaxContext } from 'better-react-mathjax';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <MainPage />
    </ThemeProvider>
  );
}

export default App;
