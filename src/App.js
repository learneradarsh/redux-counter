import logo from './logo.svg';
import './App.css';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import CounterController from './components/CounterController/CounterController';

function App() {
  return (
    <div className="App">
      <CounterDisplay/>
      <CounterController/>
    </div>
  );
}

export default App;
