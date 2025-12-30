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
import Yo from "./part/utils/Yo";
import { useAuth } from "./context/AuthContext";
import Noitc from './pages/Notic';
import AdmissionSuccess from './pages/AdmissionSuccess';

function App() {
  const pathname = useLocation();
  const { resData } = useAuth();


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



        <Route path="/AdmissionSuccess" element={<>
          <PageTitle title={`ydc`} />
          <AdmissionSuccess />
        </>
        } />




        <Route path="notic/:id" element={
          <>
            <PageTitle title={`ydc`} />
            <PagesLayout title={"helo"} content={"helo"}>
              <>
                <PageTitle title={"hello"} />
              </>
            </PagesLayout>

          </>
        } />




        {/* {index.map((e, i) => (
          e.sub.map((e, i) => (
            <Route path={`${e.slug}`} element={
              <PagesLayout title={e.title} content={e.content}>
                <>
                  <PageTitle title={`${e.slug}`} />
                </>
              </PagesLayout>} />
          ))



        ))} */}

        {resData?.map((e, i) => (
          e.pages.map((e, i) => (
            <Route path={`/${e.Name.toLowerCase().replace(/\s+/g, "-")}`} element={
              <PagesLayout title={e?.title} content={e?.Page_Data}>
                <>
                  <PageTitle title={`${e?.Name}`} />
                </>
              </PagesLayout>} />
          ))



        ))}

        {index.map((ex, i) => (
          ex.sub.map((e, i) => (
            <Route path={`/${e?.link ? e?.link : e?.slug}`} element={
              <PagesLayout title={e.title} content={e?.content}>
                <>
                  <PageTitle title={`${e?.slug}`} />
                </>
              </PagesLayout>} />
          ))



        ))}


      </Routes>
    </>
  )
}

export default App