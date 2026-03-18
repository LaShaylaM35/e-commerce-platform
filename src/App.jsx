import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductCard } from "./pages/ProductCard";
import { CheckOut } from "./pages/CheckOut";

function App() {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCard />} />
          <Route path="/nav" element={<NavBar />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
