import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reading } from './reading.tsx';
import { NavBar } from './navbar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reading" element={<Reading />} />
      </Routes>
    </BrowserRouter >
  </StrictMode >
)
