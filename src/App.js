import "./index.css";
import { Route, Routes } from "react-router-dom";
import Currencies from "../src/pages/Currencies ";
import Main from "../src/pages/Main ";
import Price from "../src/pages/Price ";
import Nav from "../src/components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </div>
  );
}
