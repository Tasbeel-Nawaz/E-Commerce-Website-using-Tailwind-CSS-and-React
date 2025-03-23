import React, { useState, useEffect } from "react"; // Don't forget to import useEffect
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./componet/header";
import Baner from "./componet/Banner";
import Topcategories from "./componet/Top-Categories";
import Topdeals from "./componet/Top-deals";
import TopProducts from "./componet/Top-Product";
import Home from "./componet/home";
import Ebay from "./componet/ebay";
import Ecom from "./componet/ecom";
import Shop from "./componet/shop";
import Comment from "./componet/comment";
import Footer from "./componet/footer";
import AboutUs from "./componet/about";
import Content from "./componet/content";
import Ricy from "./componet/ricy";
import Fol from "./componet/follow";

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setFiltered(data.products));
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      setSearchResults(
        filtered.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, filtered]);

  const location = useLocation();
  const isHeader = location.pathname === "/Header";

  return (
    <div className="bg-gray-900 min-h-screen w-full">
      <Header />

      {!isHeader && <Baner setSearchQuery={setSearchQuery} />}
      
      {searchQuery ? (
        <div className="p-4">
          <h2 className="text-white text-xl mb-4">Search Results:</h2>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  <h3 className="text-gray-900 font-bold">{product.title}</h3>
                  <p className="text-gray-700">${product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white">No results found</p>
          )}
        </div>
      ) : (
        <Routes>
          <Route path="/Top-Products" element={<TopProducts />} />
          <Route path="/" element={<Home />} />
          <Route path="/Top-Categories" element={<Topcategories />} />
          <Route path="/Top-deals" element={<Topdeals />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ebay" element={<Ebay />} />
          <Route path="/ecom" element={<Ecom />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/content" element={<Content />} />
          <Route path="/ricy" element={<Ricy />} />
          <Route path="/Follow" element={<Fol />} />
        </Routes>
      )}

      <Comment />
      <Footer />
    </div>
  );
};

export default App;
