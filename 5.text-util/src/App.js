import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';

function App() {
  return (
    <div className="App">
      <Navbar logo="TextUtils"/>
      <TextFrom heading ="Input Text Area" txt ="Write your text here..."/>
      {/* <About/> */}
    </div>
  );
}

export default App;
