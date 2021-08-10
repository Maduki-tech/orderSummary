import Card from "./components/Card"
import bgImage from "./assets/pattern-background-desktop.svg";

function App() {
  return (
    <div className="bg-blue-100 w-screen h-screen">
		<img src={bgImage} alt="" className="w-screen h-3/6"/>
		<Card/>
    </div>
  );
}

export default App;
