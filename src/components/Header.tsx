import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faCircleQuestion, faEnvelope, faNewspaper, faBell, faCog, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DarkToggle from './DarkToggle';

interface HeaderProps {
  toggleSideMenuHandler: () => void;
  toggleDarkModeHandler: () => void;
  toggleDarkMode: boolean;
}

export default function Header({ toggleSideMenuHandler, toggleDarkModeHandler, toggleDarkMode }: HeaderProps) {
  const[showDashboard, setShowDashboard] = useState(false);
  const[showManage, setShowManage] = useState(false);

  const imgStyle: React.CSSProperties = {
    width: '100px',
  };

  const searchStyle: React.CSSProperties = {
    width: '358px',
  };
  const iconStyle: React.CSSProperties = {
    width: '26px',
  };

  const menuStyle: React.CSSProperties = {
    width: '295px',
  };

  

  return <header className={`navbar pb-1 pb-sm-0 fixed-top navbar-expand-lg px-1 px-xl-0 border-bottom border-secondary ${toggleDarkMode ? "bg-dark-subtle" : "bg-white"}`}>
    <div className="container-fluid flex-nowrap flex-lg-wrap">
      <ul className="navbar-nav flex-row">
        <li className="nav-item" >
          <a href="https://preprlabs.org/explore" className=" d-inline-block">
            <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/logoNew.png" style={imgStyle} className="home_hint" alt="prepr" />
          </a>
        </li>
        <li className="nav-item bar-menu px-1">
          <button className="button-collapse d-block bg-transparent border-0 mt-1" onClick={() => toggleSideMenuHandler()}><FontAwesomeIcon icon={faBars} className='menu' /></button>
        </li>
      </ul>
      <ul className="navbar-nav flex-row">
        <li>
          <DarkToggle toggleDarkModeHandler={toggleDarkModeHandler} toggleDarkMode={toggleDarkMode} />
        </li>
        <li className="nav-item d-flex">
          <a className="nav-link d-flex" href="https://preprlabs.org/explore">
            <span className="me-2 sling-items-center">
              <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/explore.png" alt="create labs" />
            </span>
            <span className="d-none d-lg-block">Explore</span>
          </a>
        </li>
        <li className="nav-item d-flex dropdown position-relative" onMouseEnter={() => setShowDashboard(true)} onMouseLeave={() => {setShowDashboard(false)}}>
          <button className="nav-link d-flex" id="new_org_dashboard"  data-bs-toggle="dropdown" data-url="https://preprlabs.org/organisation/home"> 
            <span className="d-flex me-2 align-items-center">
              {toggleDarkMode ? <FontAwesomeIcon icon={faNewspaper} /> :
              <img src={"https://d3f06rtlkr354b.cloudfront.net/public/front/img/web-browser.png"} alt="create" style={iconStyle} />}
            </span>
            <span className="d-none d-lg-block">My dashboard </span>
          </button>
          <ul className={`dropdown-menu dropdown-menu-end position-absolute end-0 top-100 ${showDashboard ? "d-flex" : null}`} onMouseEnter={() => setShowDashboard(true)} onMouseLeave={() => { setShowDashboard(false) }}>
            <li className="dropdown-submenu">
              <a className="dropdown-item" href="https://preprlabs.org/user/home"> 
                <span>
                  <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/user.png" alt="create" />
                </span>  
                User dashboard  
              </a>
            </li>
          </ul>       
        </li>
        <li className="nav-item d-flex dropdown position-relative" onMouseEnter={() => setShowManage(true)} onMouseLeave={() => {setShowManage(false)}}>
          <button className="nav-link d-flex" data-bs-toggle="dropdown"> 
            <span className="d-flex me-2 align-items-center">
              {toggleDarkMode ? <FontAwesomeIcon icon={faCog} /> :
              <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/settings.png" alt="" style={iconStyle} />}
            </span>
            <span className="d-none d-lg-block">  Manage</span> 
          </button>
          <ul className={`dropdown-menu dropdown-menu-end position-absolute end-0 top-100 ${showManage ? "d-flex" : null}`} onMouseEnter={() => setShowManage(true)} onMouseLeave={() => { setShowManage(false) }}>
            <li className="dropdown-submenu w-100 display-block">
              <a className="dropdown-item" href="https://preprlabs.org/profile/RichardTillo"> 
                <span>
                  <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/user.png" alt="profile" />
                </span>  
                Profile  
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item searchbar d-none d-md-block">
          <div className="input-group" id="multiple-datasets">
            <div className="input-group-prepend d-flex">
              <span className="input-group-text">
                <img alt="search" src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/search_icon.png" />
              </span>
              <input type="text" className="form-control" id="main_search" style={searchStyle} placeholder="Search Challenges, Labs, Projects and people" />
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <button className="nav-link" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>
              <img alt="" src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/default-user.png" title="Richard Tillo" style={iconStyle}/>
            </span>
          </button>
          <div className="position-absolute dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton" style={menuStyle}>
            <div className='position-relative w-auto overflow-hidden'>
              <ul className="overflow-hidden w-auto list-unstyled">
                <li className="border-bottom">
                  <a href=" https://preprlabs.org/profile/RichardTillo" className='d-flex text-decoration-none px-3 py-2 text-secondary'>
                    <div className="icon-circle w-25">
                      <img alt="" src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/default-user.png" title="Richard Tillo" className='w-100'/>
                    </div>
                    <div className="menu-info w-75 ps-1">
                      <h4>Richard Tillo</h4>
                    </div>
                  </a>
                </li>
                <li className="border-bottom">
                  <a href="https://preprlabs.org/profile/RichardTillo" className='text-decoration-none px-3 py-2 d-block text-secondary'>
                    <div className="menu-info">
                      <h4>
                        <FontAwesomeIcon icon={faUser} />  My info
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="border-bottom">
                  <a className="text-decoration-none px-3 py-2 d-block text-secondary" href="https://intercom.help/preprme/en/">
                    <div className="menu-info">
                      <h4>
                        <FontAwesomeIcon icon={faCircleQuestion} /> Help 
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="border-bottom">
                  <a className="text-decoration-none px-3 py-2 d-block text-secondary" href="https://preprlabs.org/chat">
                    <div className="menu-info">
                      <h4>
                        <FontAwesomeIcon icon={faEnvelope} /> Inbox
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="border-bottom">
                  <a className="text-decoration-none px-3 py-2 d-block text-secondary" href="https://preprlabs.org/newsfeed">
                    <div className="menu-info">
                      <h4>
                        <FontAwesomeIcon icon={faNewspaper} /> Newsfeed 
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="border-bottom">
                  <a className="text-decoration-none px-3 py-2 d-block text-secondary" href="https://preprlabs.org/notifications">
                    <div className="menu-info">
                      <h4>
                        <FontAwesomeIcon icon={faBell} /> Notifications
                      </h4>
                    </div>
                  </a>
                </li>
                <li className="border-bottom">
                  <a className="text-decoration-none px-3 py-2 d-block text-secondary" href="https://preprlabs.org/setting">
                    <div className="menu-info">

                      <h4>
                        <FontAwesomeIcon icon={faCog} /> Settings
                      </h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none px-3 py-2 d-block text-secondary" href="https://preprlabs.org/logout">
                    <div className="menu-info">
                      <h4>
                        <FontAwesomeIcon icon={faRightFromBracket} /> Log out
                      </h4>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="d-block d-md-none w-100 mt-1">
      <div className="input-group" id="multiple-datasets">
        <div className="input-group-prepend d-flex">
          <span className="input-group-text">
            <img alt="search" src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/search_icon.png" />
          </span>
          <input type="text" className="form-control" id="mobile_main_search" style={searchStyle} placeholder="Search Challenges, Labs, Projects and People"></input>
        </div>
      </div>
    </div>
  </header>
}