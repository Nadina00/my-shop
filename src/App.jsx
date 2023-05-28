import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage";
import ShoppingCardPage from "./page/ShoppingCardPage";
import ProductListPage from "./page/ProductListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path=":id" element={<ProductListPage />} />
        </Route>
        <Route path="/shopping" element={<ShoppingCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
