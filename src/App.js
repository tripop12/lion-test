import logo from "./logo.svg";
import "./App.css";
import {
  CardA,
  Features2x2,
  Features4x1,
  HeroLayout2,
  HeroLayout3,
  NavBar,
} from "./ui-components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroLayout2 />
      <div style={{marginTop: 10, marginBottom: 10}}>
        <Features4x1 />
      </div>
      <div className="Card">
        <CardA />
        <CardA />
        <CardA />
        <CardA />
      </div>
      <Features2x2 />
    </div>
  );
}

export default App;
