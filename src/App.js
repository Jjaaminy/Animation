import logo from './logo.svg';
import './App.css';
import {DefaultPlayer as Video} from 'react-html5video';
import Vid from './video/0111 (2).mp4';
function App() {
  return (
    <div className="App">
   <h1>Animation</h1>
        <Video autoPlay loop>
        <source src={Vid} type={"video/mp4"}/>
        </Video>

    </div>
  );
}

export default App;
