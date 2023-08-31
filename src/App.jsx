
import {Outlet } from "@tanstack/react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
        {/* <Sidebar /> */}
      <main>
        <div className="w-3">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
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
