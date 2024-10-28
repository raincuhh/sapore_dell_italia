//import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/page";
import { BookingPage } from "../pages/booking/page";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}
