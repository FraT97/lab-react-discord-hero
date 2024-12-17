
import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import background from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={discordLogo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>
      <main className="main" style={{ backgroundImage: `url(${background})` }}>
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
      </main>
    </div>
  );
}

export default App;