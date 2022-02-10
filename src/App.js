import "./App.css";
import Address from "./components/Address";
import FullName from "./components/FullName";
import Product from "./components/Product";
import ProfilePhoto from "./components/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto />
        <FullName />
        <Address />
      </header>
    </div>
  );
}

export default App;
