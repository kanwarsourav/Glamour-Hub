import React from 'react'
import Products from '../Products/Products'
import Hero from '../Hero/Hero'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calender from '../Calender/Calender';
import Form from '../Form/Form';

export default function Home() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calendar" element={<Calender/>} />
        <Route path="/form" element={<Form/>} />

      </Routes>
    </Router>
    </div>
  )
}
