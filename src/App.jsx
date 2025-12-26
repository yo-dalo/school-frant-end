import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { index } from './pagesConfig/index';
import PagesLayout from './layout/PagesLayout';
import PageTitle from './part/utils/PageTitle';
import { useLocation } from "react-router-dom";
function App() {
 const pathname = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [pathname]);


  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <PageTitle title={`ydc`} />
          <Home />
        </>
        } />
        {index.map((e, i) => (


          e.sub.map((e, i) => (
            <Route path={`${e.slug}`} element={
              <PagesLayout title={e.title} content={e.content}>
                <>

                  <PageTitle title={`${e.slug}`} />

                </>
              </PagesLayout>} />
          ))



        ))}

      </Routes>
    </>
  )
}

export default App