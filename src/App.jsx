import "./App.css";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <Sidebar />

      <main>
        <h1 className="text-3xl font-bold underline">CodeConnect</h1>
        <HomePage />
      </main>

      <footer>
        <small>Created with ❤️ by _REPLACE_</small>
      </footer>
    </>
  );
}

export default App;
