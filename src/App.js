import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from './Components/Data'

function App() {
  const cards = data.map( car => {
    return <Card 
      key={car.id}
      car={car}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="carList">
      {cards}
      </section>
    </div>
  );
}

export default App;
