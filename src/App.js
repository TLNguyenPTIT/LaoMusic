import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ErrorBoundary from './components/ErrorBoundary';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1a1a1a;
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <ErrorBoundary>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <MainContent />
        </div>
      </ErrorBoundary>
    </AppContainer>
  );
}

export default App;