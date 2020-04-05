import React from 'react';
import { MuiThemeProvider, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import LandingHeader from './components/landing/LandingHeader'
import TopNavBar from './components/app-bar/TopNavBar';
import AboutSection from './components/about/AboutSection';
import FooterSection from './components/footer/FooterSection';

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

  theme.palette.text.primary = "#eeeeee";

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopNavBar />
        <LandingHeader />
        <AboutSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
