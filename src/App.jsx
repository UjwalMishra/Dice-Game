import { useState } from "react";
import Home from "./components/Home";
import PlayGame from "./components/PlayGame";
import { Routes, Route } from "react-router-dom";
import ShowRules from "./components/ShowRules";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/playgame" element={<PlayGame></PlayGame>}></Route>
        <Route path="/showrule" element={<ShowRules></ShowRules>} />
      </Routes>
    </>
  );
}

export default App;
