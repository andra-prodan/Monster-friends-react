import './App.css';
import Monster from './components/Monster.js';
import data from './monsters.json';

function App() {
  return (
    <div className="App">
    <div className='Title'>
    <h1>Monster friends</h1>
    </div>
    <div>
    <input></input>
    </div>
    <div className='Cards'>
    {data.monsters.map((monster)=>(
      <Monster title={monster.title} description={monster.description} src={`${monster.url}`}/>
    ))}
    </div>
    </div>
  );
}

export default App;
