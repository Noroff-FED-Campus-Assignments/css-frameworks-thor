import HomePage from "../components/HomePage";
import bgImage from "../assets/gradient-background-shape.svg";
function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className=" bg-black">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default Home;
