import "./App.css";
import CardExample from "./Components/Cards";
import PlaintextExample from "./Components/Forms";
import BasicExample from "./Components/Navb";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* This is the navbar component */}
      <BasicExample />
      {/*This is the Form */}
      <div
        style={{
          backgroundColor: "#F8F9FA",
          margin: "10px 6% 10px 6%",
          padding: "10px ",
          borderRadius: "0.5em",
        }}
      >
        <PlaintextExample />
      </div>
      {/*These are the Cards */}
      <div
        style={{
          backgroundColor: "#F8F9FA",
          margin: "10px 6% 10px 6%",
          padding: "10px ",
          borderRadius: "0.5em",
        }}
      >
        <CardExample />
      </div>
    </div>
  );
}

export default App;
