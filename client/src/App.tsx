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
    main: "#4db6ac",
    light: "#b2dfdb",
    dark: "#00897b",
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
