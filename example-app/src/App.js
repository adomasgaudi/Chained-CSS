/** @jsxImportSource @emotion/react */
import logo from "./logo.svg";
import { _ } from "../node_modules/chainedcss/dist/chainedcss.cjs.development";

function App() {
  return (
    <div {..._.textCenter()}>
      <header {..._.bgWarmGray900().text`white`.textLg().p5()}>
        <img src={logo} alt='logo' {..._.h(350)} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          {..._.text`#61dafb`}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
