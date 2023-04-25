//css
import "./App.css";

// data
import utilisateur from "./data/utilisateur";

// page.jsx
import Compte from "./page/Compte";

//conposente.jsx

function App() {
  return (
    <div className="App">
      {utilisateur.map((data, id) => (
        <Compte utilisateur={data} id={id} />
      ))}
    </div>
  );
}

export default App;
