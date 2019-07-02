import React from 'react';
import logo from './logo.svg';
import './App.css';

export interface HelloProps {
  compiler: string;
  framework: string;
}

const App: React.FC <HelloProps> = (props: HelloProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and {props.compiler} and {props.framework}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
