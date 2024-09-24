import "../src/layout.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
