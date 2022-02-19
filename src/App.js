import Collections from "./Collections";
import Landing from "./Landing";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="text-white flex flex-col">
      <Navbar />
      <Landing />
      <Collections />
    </div>
  );
}

export default App;
