import { useEffect, useState } from "react";

import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Company from "./components/Company";
import Main from "./pages/Main";
import Ceo from "./pages/Ceo";
import Ci from "./pages/Ci";
import Shopall from "./pages/Shopall";
import Organization from "./pages/Organization";
import Products from "./pages/Products";
import Cart from "./pages/Cart.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  //    getProductList() : api 호출
  const getProductList = async () => {
    let url = `http://localhost:4000/products?category=new`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };

  // useEffect(() => {});   컴포넌트가 렌더링될 때마다 실행
  // useEffect(() => {}, []);   컴포넌트가 처음 렌더링될 때 한 번만 실행
  // useEffect(() => {}, [변수, 변수2]);  특정 변수가 변경될 때마다 실행
  // useEffect(() => {return ()=>{ 컴포넌트 제거될 때 1차 실행되는 곳 }}, []);
  useEffect(() => {
    getProductList();
  }, []);

  //---------------- ----------------//
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/shopall" element={<Shopall products={products} />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/company" element={<Company />}>
          <Route path="organization" element={<Organization />} />{" "}
          <Route path="ci" element={<Ci />} /> {/* <Outlet></Outlet>랑 짝꿍*/}
          <Route path="ceo" element={<Ceo />} /> {/* <Outlet></Outlet>랑 짝꿍*/}
          {/*          /company/ceo 처리됨*/}
          {/*/company 페이지 내의 <Outlet></Outlet>랑 짝꿍*/}
        </Route>

        <Route path="*" element={<h1 className="mw">페이지가 없습니다</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
