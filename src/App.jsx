
import { Outlet, Link } from "@tanstack/react-router";
import Sidebar from "./components/Sidebar";
import "./App.css";


function App() {
  return (
    <>
      <Sidebar />
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
        <div className="w-3">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {/* NOTE: Outlet is where the pages are rendered */}
        <Outlet/>
        </div>
        

      </main>

      <footer>
        <small>Created with ❤️ by _REPLACE_</small>
      </footer>
    </>
  );
}

export default App;
