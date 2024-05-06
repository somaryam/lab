import './App.css';
import Message from './components/Message';
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
        <Message name="Daffy Duck" job="engineer" age ={32} / >
        <Team name ="Liverpool" title={7}/ >  
        <Team name ="Real Madrid" title={14}/ > 
        <Team name ="PSG" title={0}/ > 
    </div>
  );
}

export default App;
