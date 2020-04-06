import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import TopNavBar from './components/app-bar/TopNavBar';

function App() {
  let theme = createMuiTheme({
    props: {
      MuiTypography: {
        color: "textPrimary"
      }
    }
  });
  theme.palette.secondary = {
    main: "#b5763f",
    light: "#cb9f79",
    dark: "#9f6430",
    contrastText: "#fff",
  };

  theme.palette.text.primary = "#ffffff";

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopNavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
