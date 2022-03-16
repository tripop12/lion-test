import "./App.css";
import {
  AlertItem,
  CardACollection,
  FeatureDetailCollection,
  Features2x2,
  HeroLayout2,
  MarketingFooter,
  NavBar,
} from "./ui-components";
import FeatureDetail from "./ui-components/FeatureDetail.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroLayout2 />
      <div
        style={{
          marginTop: 30,
          marginBottom: 30,
          padding: 30,
          height: 241,
          backgroundColor: "#cfcfcf",
        }}
      >
        <FeatureDetailCollection />
      </div>
      <div className="Card">
        <CardACollection />
      </div>
      <Features2x2 />
      <AlertItem overrides={{ Alert: { children: "TEST", fontSize: 28 } }} />
      <MarketingFooter />
    </div>
  );
}

export default App;
