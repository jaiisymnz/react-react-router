import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import CreateProductPage from "./pages/CreateProductPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/create" element={<CreateProductPage />} />
        <Route path="product/edit/:productId" element={<EditProductPage />} />
        <Route path="product/view/:productId" element={<ViewProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
