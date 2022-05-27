import './app.scss';
import Topbar from './components/Topbar/Topbar';
import DrumMachine from './components/DrumMachine/DrumMachine';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className='section'>
        <DrumMachine />
      </div>
    </div>
  );
}

export default App;
