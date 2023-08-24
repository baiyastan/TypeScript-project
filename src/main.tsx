import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

function Main() {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default Main;
