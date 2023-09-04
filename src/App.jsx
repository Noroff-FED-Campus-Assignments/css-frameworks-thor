import { Outlet } from "@tanstack/react-router";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>

    </>
  );
}

export default App;
