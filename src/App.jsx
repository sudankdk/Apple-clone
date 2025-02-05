import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
function App() {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    </>
  );
}

export default App;
