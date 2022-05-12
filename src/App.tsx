import { useState } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BTN = styled.div`
  color: black;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

function App() {
  const [state, setState] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <div>{state}</div>
        <Container>
          <BTN onClick={() => setState(state + 1)}>+</BTN>
          <BTN onClick={() => setState(state - 1)}>-</BTN>
        </Container>
      </header>
    </div>
  );
}

export default App;
