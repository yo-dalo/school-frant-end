import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { index } from './pagesConfig/index';
import PagesLayout from './layout/PagesLayout';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {index.map((e, i) => (


          e.sub.map((e, i) => (
            <Route path={`/${e.slug}`} element={<PagesLayout data={"helllo"} />} />
          ))



        ))}

      </Routes>
    </>
  )
}

export default App