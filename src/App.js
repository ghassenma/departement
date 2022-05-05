import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import ShoppingList from "./ShoppingList";
import Home from "./Home";
import Connection from "./Connection";

export default function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1 className="appTitle">Exercices ReatJS - semaine 16</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/connection" element={<Connection />} />
      </Routes>
    </div>
  );
}
