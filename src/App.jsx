
import { Outlet } from "@tanstack/react-router";
import Sidebar from "./components/Sidebar";
import "./App.css";


function App() {
  return (
    <>
      <Sidebar />
      <main>
        {/* NOTE: Outlet is where the pages are rendered */}
        <Outlet/>
      </main>

      {/* <footer>
        <small>Created with ❤️ by _REPLACE_</small>
      </footer> */}
    </>
  );
}

export default App;
