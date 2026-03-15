import { GameBoard } from './components/GameBoard';
import { cowCards } from './data/cowData';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <header className="app-header">
          <h1 className="app-title">Pictures of Cows<br />that Mak Likes</h1>
        </header>
        <main className="app-main">
          <GameBoard initialCards={cowCards} />
        </main>
      </div>
      <footer className="app-credit">
        an Abel Charrow joint © 2026
      </footer>
    </div>
  );
}

export default App;
