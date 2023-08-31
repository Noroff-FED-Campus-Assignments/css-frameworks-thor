import HomePage from "../components/HomePage";
import bgImage from "../assets/gradient-background-shape.svg";

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto px-4 py-16">
        <HomePage />
      </div>
    </div>
  );
}

export default Home;
