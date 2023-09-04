import { Outlet } from "@tanstack/react-router";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <main>
        {/* NOTE: Outlet is where the pages are rendered */}
        <Outlet />
      </main>

    </>
  );
}

export default App;
