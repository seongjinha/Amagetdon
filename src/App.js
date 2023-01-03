<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
=======
import Header from "./Header";
import Login from "./Login";
import Logo from "./Logo";
function App() {
  return (
    <div className='page'>
      <Header />
      <Login />
      <Logo />
    </div>
  );
}
export default App;
>>>>>>> 64ed172ff5b61dcc1e07da0249b4c9acc7dad7d7
