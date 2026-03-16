import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import Header from './layout/Header';
import HiddenOverlay from './components/HiddenOverlay';
import { useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import NavBarMobile from './layout/NavBarMobile';




function App() {

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 850px)");


  return (

    <>

      {isMobile && <NavBarMobile isOpen={isOpen} setIsOpen={setIsOpen} />}

      <HiddenOverlay isOpen={isOpen} setIsOpen={setIsOpen} />


      <div inert={isOpen ? true : false}>

        <Header isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />


        <Routes>

          <Route path='/home' element={<HomePage />} />

          <Route path="/projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":projectId" element={<ProjectDetailsPage />} />
          </Route>

          <Route path='/contact' element={<ContactPage />} />

          <Route path='*' element={<Navigate to={"/home"} replace />} />




        </Routes>

      </div >


    </>

  )
}

export default App
