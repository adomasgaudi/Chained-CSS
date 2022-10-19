import logo from "./logo.svg";
import "./App.css";
import { sum } from "chaindecss";

function App() {
  console.log(sum);
  return (
    <div className='App'>
      <header>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// npm install from file
// npm install file:../chaindecss
