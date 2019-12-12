import React from 'react';
import './css/App.css';
import './css/Projects.css'
// import './App.scss';
// import SideNav from './SideNav';
import NoPageFound from './components/NoPageFound';

import { useRoutes } from 'hookrouter';
import routes from "./router"

// TODO make different navigation for screens smaller than 992px

// function closeNavScreen() {
//   document.getElementById("r-Sidenav").style.width = "0";
//   document.getElementById("sidenav-screen").style.display = "none";
//   document.getElementById("l-Sidenav").style.width = "0";
//   document.getElementById("sidenav-screen").style.display = "none";
// }

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"></link>
      </head>
      <div className="App">
        {routeResult || <NoPageFound />}
      </div>
    </>
  );
}

export default App;

// <SideNav id='l-Sidenav' className='l-sidenav' pos='left'/>
// <SideNav id='r-Sidenav' className='r-sidenav' pos='right'/>
// <div id="sidenav-screen" className="sidenav-screen" onClick={() => closeNavScreen()}></div>

// function handleClick(btn) {
//   switch (btn) {
//     case 'NAV-SCREEN':
//       closeNav()
//     break;
//     case 'LNAV-CLOSE':
//       console.log('Close Left Sidenav');
//       closeNav('left');
//     break;
//     case 'RNAV-CLOSE':
//       console.log('Close Left Sidenav');
//       closeNav('right');
//     break;
//   }
// }

// function closeNav(pos) {
//   switch (pos){
//     case 'left':
//       document.getElementById("l-Sidenav").style.width = "0";
//       document.getElementById("sidenav-screen").style.display = "none";
//     break;
//     case 'right':
//       document.getElementById("r-Sidenav").style.width = "0";
//       document.getElementById("sidenav-screen").style.display = "none";
//     break;
//     default:
//       document.getElementById("r-Sidenav").style.width = "0";
//       document.getElementById("sidenav-screen").style.display = "none";
//       document.getElementById("l-Sidenav").style.width = "0";
//       document.getElementById("sidenav-screen").style.display = "none";
//     break;
//   }
// }

// function openNav(pos) {
//   switch (pos){
//     case 'right':
//       document.getElementById("sidenav-screen").style.display = "block";
//       document.getElementById("r-Sidenav").style.width = "28vw";
//     break;
//     case 'left':
//       document.getElementById("sidenav-screen").style.display = "block";
//       document.getElementById("l-Sidenav").style.width = "28vw";
//     break;
//     default:
//     break;
//   }
// }

// <HomePage handleClickLeft={() => handleClick('LBTN')} handleClickRight={() => handleClick('RBTN')}/>

// <ul className="nav-items">
//   <li>Home</li>
//   <li>Projects</li>
//   <li>Blog</li>
//   <li>Hire Me</li>
//   <li>About</li>
// </ul>

// <div id="l-Sidenav" className="l-sidenav">
//   <div onClick={() => handleClick('LNAV-CLOSE')}>
//     <b>x</b>
//     <br/>
//     <a>Home</a>
//   </div>
// </div>

// <div id="r-Sidenav" className="r-sidenav">
//   <div onClick={() => handleClick('RNAV-CLOSE')}>
//     <b>x</b>
//   </div>
// </div>

// <div className="App-container">
//   <aside className="Left-aside">
//     <div className="Nav-spacer"></div>
//     <div className="Nav-button" onClick={() => handleClick('LBTN')}>
//       <h1>{rightArrow}</h1>
//     </div>
//   </aside>
//   <main className="App-main">
//   </main>
//   <aside className="Right-aside">
//     <div className="Nav-spacer"></div>
//     <div className="Nav-button" onClick={() => handleClick('RBTN')}>
//       <h1>{leftArrow}</h1>
//     </div>
//   </aside>
// </div>

// <header className="App-header">
//   <h1>{homeTitle}</h1>
// </header>
