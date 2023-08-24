import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Explore from './components/Explore';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import './custom.css';
import Register from './components/Register';
import Success from './components/Success';
import Login from './components/Login';

function App() {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const toggleSideMenuHandler = () => setToggleSideMenu(!toggleSideMenu);
  const toggleDarkModeHandler = () => setToggleDarkMode(!toggleDarkMode);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div data-bs-theme={toggleDarkMode ? "dark" : "light"}>
            <Header toggleSideMenuHandler={toggleSideMenuHandler} toggleDarkModeHandler={toggleDarkModeHandler} toggleDarkMode={toggleDarkMode} />
            <section className={`position-relative mt-5 pt-5 pt-md-2 pb-5 ${toggleDarkMode ? "bg-black" : "bg-info"}`}>
              <SideMenu toggleSideMenu={toggleSideMenu} toggleDarkMode={toggleDarkMode} />
              <Explore />
            </section>
            <Footer toggleDarkMode={toggleDarkMode} />
          </div>
        } />
      <Route
        path="/:id"
        element={
          <div data-bs-theme={toggleDarkMode ? "dark" : "light"}>
            <Header toggleSideMenuHandler={toggleSideMenuHandler} toggleDarkModeHandler={toggleDarkModeHandler} toggleDarkMode={toggleDarkMode} />
            <section className={`position-relative mt-5 pt-5 pt-md-2 pb-5 ${toggleDarkMode ? "bg-black" : "bg-info"}`}>
              <SideMenu toggleSideMenu={toggleSideMenu} toggleDarkMode={toggleDarkMode} />
              <Explore />
            </section>
            <Footer toggleDarkMode={toggleDarkMode} />
          </div>
        } />
      <Route 
        path="/register" 
        element={
        <main className='d-flex flex-column min-vh-100'>
          <Register />
          <Footer toggleDarkMode={toggleDarkMode} />
        </main>
        } />
      <Route
        path="/login"
        element={
          <main className='d-flex flex-column min-vh-100'>
            <Login />
            <Footer toggleDarkMode={toggleDarkMode} />
          </main>
        } />
      <Route
        path="success"
        element={
          <main className='d-flex flex-column min-vh-100'>
            <Success />
            <Footer toggleDarkMode={toggleDarkMode} />
          </main>
        } />
    </Routes>
  );
}

export default App;
