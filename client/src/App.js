import logo from './sample.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>👽 Hello Citizens of Earth! 👽</h3>
        <p>
        We have crash-landed on this domain. Please stand by, we are in the middle of some calibrations...
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Button of future awesomeness
        </a>
      </header>
    </div>
  );
}

export default App;
