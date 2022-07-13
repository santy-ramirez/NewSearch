import "./App.css";

import HeaderComponent from "./components/HeaderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroComponent from "./components/HeroComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroComponent></HeroComponent>
    </div>
  );
}

export default App;
