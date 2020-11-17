import "./App.css";
import Header from "./Header";
import RomanceCards from "./RomanceCards";
import SwipeButtons from "./SwipeButtons ";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* <h1>This is the dating app. </h1> */}
      <Header />
      <RomanceCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
