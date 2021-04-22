import { useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke("Klary", "On");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Custom Hook
  // const joke = useRandomJoke('Klary', 'On');

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <form>
          <input
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
