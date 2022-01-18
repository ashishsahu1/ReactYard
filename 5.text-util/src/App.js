import './App.css';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';

function App() {
  return (
    <div classNameName="App">
      <Navbar logo="TextUtils"/>
      <TextFrom heading ="Input Text Area" txt ="Write your text here..."/>
    </div>
  );
}

export default App;
