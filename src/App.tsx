import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Explore from './components/Explore';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import './custom.css';

function App() {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const toggleSideMenuHandler = () => setToggleSideMenu(!toggleSideMenu);
  const toggleDarkModeHandler = () => setToggleDarkMode(!toggleDarkMode);

  return (
    <div data-bs-theme={toggleDarkMode ? "dark" : "light"}>
      <Header toggleSideMenuHandler={toggleSideMenuHandler} toggleDarkModeHandler={toggleDarkModeHandler} toggleDarkMode={toggleDarkMode} />
      <section className={`position-relative mt-5 pt-5 pt-md-2 pb-5 ${toggleDarkMode ? "bg-black" : "bg-info"}`}>
        <SideMenu toggleSideMenu={toggleSideMenu} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/:id" element={<Explore />} />
        </Routes>
      </section>
      <Footer toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
