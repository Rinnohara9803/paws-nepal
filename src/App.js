import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header";

function App() {
  return (
    <div className="App text-white">
      <Header></Header>
      <div className=" py-4 md:py-12 bg-zinc-900 w-full">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate replace to="/home" />}
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

// px-10 md:px-36
