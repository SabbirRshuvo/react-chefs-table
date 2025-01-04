import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import Recipe from "./Layout/Recipe";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Hero />
        <Recipe />
      </div>
    </>
  );
}

export default App;
