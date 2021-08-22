

import logo from '../../assets/logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wedding App
        </p>
        <a
          className="App-link"
          href="https://piyanos.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered
        </a>
      </header>
    </div>
  );
}

export default Home;
