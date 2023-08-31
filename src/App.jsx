
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
        {/* NOTE: Outlet is where the pages are rendered */}
        <Outlet/>
      </main>

      <footer>
        <small>Created with ❤️ by _REPLACE_</small>
      </footer>
    </>
  );
}

export default App;
