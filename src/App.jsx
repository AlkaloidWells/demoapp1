import Hello from "./components/Hello";
import Do from "./components/Do";
import Fruits from "./components/Fruits";

function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Alkaloid",
    count: 2,
    emoji: "👋",
    seatNumbers: [1, 2, 3, 4],
  };

  return (
    <div className="App">
      {/* <Hello person={person} /> */}
      {/* <Hello name="Beson" count="3" emoji="🍁" /> */}
      <Fruits />

      {/* <Do /> */}
    </div>
  );
}

export default App;
