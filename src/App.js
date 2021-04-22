import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke();

  // Custom Hook
  // const joke = useRandomJoke('Klary', 'On');

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <button>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
