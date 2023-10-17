import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookingDetails from "./pages/BookingDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white items-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabbooking/:id" element={<BookingDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
