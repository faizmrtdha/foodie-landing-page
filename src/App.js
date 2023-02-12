import Homepage from "components/home";
import Navbar from "components/navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Homepage />
      </main>
    </div>
  );
};

export default App;
