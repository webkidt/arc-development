import { ThemeProvider } from '@mui/material/styles';
import Header from './ui/Header';
import theme from './ui/Theme';

// cSpell: disable
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
