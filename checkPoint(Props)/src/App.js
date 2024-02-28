import "./App.css";
import BrandExample from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerList from "./Components/PlayerList";

function App() {
  return (
    <div className="App">
      <BrandExample />
      <h1 style={{ color: "yellow" }}>Player Information :</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
          marginLeft: "6%",
          marginRight: "6%",
          marginBottom: "10px",
          borderRadius: "1em",
        }}
      >
        <PlayerList />
      </div>
    </div>
  );
}

export default App;
