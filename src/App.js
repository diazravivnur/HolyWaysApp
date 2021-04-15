import "./styles/global.css"
import Navbar from "./components/Navbar";
import Information1 from "./components/Information1";
import Information2 from "./components/Information2";
import Card from "./components/Card"
function App() {
  return (
    <>
      <Navbar />
      <Information1 />
      <Information2 />
      <Card />
    </>
  );
}

export default App;
