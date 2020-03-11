import * as React from 'react';
import logo from './logo.svg';
import './App.css';

type SAVE_BUG = "SAVE_BUG";

interface SAVE_BUG_ACTION_PAYLOAD{
  id : number,
  name : string
};

interface SAVE_BUG_ACTION{
  type : string,
  payload : SAVE_BUG_ACTION_PAYLOAD
}

const saveBugAction : SAVE_BUG_ACTION = {
  type : 'SAVE_BUG',
  payload : {id : 0, name : 'asdfdasa'}
}

interface MyCompProp{
  x : number,
  y : number
}


const App : React.FC<MyCompProp> = function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
