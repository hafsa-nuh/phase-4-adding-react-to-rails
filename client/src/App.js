import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    // instead of fetch("http://localhost:3000/movies") koz ==> "proxy": "http://localhost:3000" in { package.json}
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!</h1>
      </header>
    </div>
  );
}

export default App;
