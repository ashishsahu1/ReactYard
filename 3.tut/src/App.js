import "./App.css";

function formatName(user) {
  return user.first + " " + user.second;
}

function greet(timeof) {
  if (timeof === "morning") {
    return <h1>Good Morning</h1>;
  } else if (timeof === "evening") {
    return <h1>Good evening</h1>;
  } else if (timeof === "afternoon") {
    return <h1>Good afternoon</h1>;
  } else {
    return <h1>Good night</h1>;
  }
}

let user = {
  first: "Ashish hai ye",
  second: "Sahu",
};

let tt = 'night'

function App() {
  return (
    <div className="App">
      <h1>Hello World {formatName(user)}</h1>
      <h3>{greet(tt)}</h3>
    </div>
  );
}

export default App;
