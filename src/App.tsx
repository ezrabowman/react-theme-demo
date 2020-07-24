import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { darkTheme, lightTheme, partyTheme } from './themes';
import ThemeSelector from './ThemeSelector';
import { themeReducer } from './redux/themeReducer';

const store = createStore(themeReducer);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
  }
`;

const SytledH1 = styled.h1`
  color: ${(props: any) => props.theme.primary};
`;

function App() {
  const theme = useSelector((state: any) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <header className="App-header">
          <SytledH1>React Themes Demo</SytledH1>
          <ThemeSelector></ThemeSelector>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
