import logo from "./logo.svg";
import "./App.css";
import {
  CardA,
  CardACollection,
  FeatureDetailCollection,
  Features2x2,
  Features4x1,
  HeroLayout2,
  HeroLayout3,
  NavBar,
} from "./ui-components";
import FeatureDetail from "./ui-components/FeatureDetail.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroLayout2 />
      <div style={{marginTop: 10, marginBottom: 10, padding: 30, height:241, backgroundColor: '#cfcfcf'}}>
        <FeatureDetailCollection />
      </div>
      <div className="Card">
        <CardACollection />
      </div>
      <Features2x2 />
    </div>
  );
}

export default App;
