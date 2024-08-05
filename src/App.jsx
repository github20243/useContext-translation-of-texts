import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';
import { LanguageProvider, LanguageContext } from './/components/LanguageContext';
import TextBlocks from './/components/TextBlocks';
import styled, { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    font-family: Arial, sans-serif;
  }
`;

const lightTheme = {
  body: '#FFF',
  text: '#000'
};

const darkTheme = {
  body: '#000',
  text: '#FFF'
};

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.body === '#FFF' ? '#f9f9f9' : '#1a1a1a'};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
  border-radius: 8px;
  color: white;
  font-size: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.body === '#FFF' ? '#000' : '#FFF'};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainComponent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

const MainComponent = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <div>HEADER</div>
          <ButtonGroup>
            <Button onClick={() => changeLanguage('ru')}>ru</Button>
            <Button onClick={() => changeLanguage('en')}>en</Button>
            <Button onClick={() => changeLanguage('kg')}>kg</Button>
            <Button onClick={toggleTheme}>{isDarkMode ? 'Light' : 'Dark'}</Button>
          </ButtonGroup>
        </Header>
        <TextBlocks />
      </Container>
    </StyledThemeProvider>
  );
};

export default App;
