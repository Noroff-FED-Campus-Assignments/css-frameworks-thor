import { Link } from "@tanstack/react-router";
import "./App.css";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Sidebar />
      </div>

      <header>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Login</Link> {/* Correct the link to "login" */}
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <HomePage />
      </main>

      <footer>
        <small>Created with ❤️ by _REPLACE_</small>
      </footer>
    </>
  );
}

export default App;
