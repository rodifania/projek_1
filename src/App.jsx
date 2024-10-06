import "./App.css";
// import Card from './components/Card'
// import Button from './components/Button'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// import Grid from './components/Grid'
import "./assets/stylebaru.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./pages/Profil";
import Beranda from "./pages/beranda/Beranda";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Negara from "./pages/negara/Negara";
import DetailNegara from "./pages/DetailNegara";
import ThemeContext from "./components/context/ThemeContext";
import { useState } from "react";

function App() {
  // const [data, setData] = useState("hallo")
  // const [resto, setResto] = useState("")

  // const ambilData = async () => {
  //   const response = await fetch("https://dummyjson.com/products")
  //   const data = await response.json()
  //   setResto(data)
  // }


  const theme = useState ('light')

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/negara" element={<Negara />} />
        <Route path="/detailnegara/:id" element={<DetailNegara />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
