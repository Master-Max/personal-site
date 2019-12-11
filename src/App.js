import React from 'react';
import logo from './logo.svg';
import './App.css';

const homeTitle = '<codeby.me/>';
const rightArrow = '>';
const leftArrow = '<';

// TODO make different navigation for screens smaller than 992px

function openNav(pos) {
  switch (pos){
    case 'right':
      document.getElementById("sidenav-screen").style.display = "block";
      document.getElementById("r-Sidenav").style.width = "28vw";
    break;
    case 'left':
      document.getElementById("sidenav-screen").style.display = "block";
      document.getElementById("l-Sidenav").style.width = "28vw";
    break;
    default:
    break;
  }
}

function closeNav(pos) {
  switch (pos){
    case 'right':
      document.getElementById("r-Sidenav").style.width = "0";
      document.getElementById("sidenav-screen").style.display = "none";
    break;
    case 'left':
      document.getElementById("l-Sidenav").style.width = "0";
      document.getElementById("sidenav-screen").style.display = "none";
    break;
    default:
      document.getElementById("r-Sidenav").style.width = "0";
      document.getElementById("sidenav-screen").style.display = "none";
      document.getElementById("l-Sidenav").style.width = "0";
      document.getElementById("sidenav-screen").style.display = "none";
    break;
  }
}

function handleClick(btn) {
  switch (btn) {
    case 'NAV-SCREEN':
      closeNav()
    break;
    case 'LNAV-CLOSE':
      console.log('Close Left Sidenav');
      closeNav('left');
    break;
    case 'RNAV-CLOSE':
      console.log('Close Left Sidenav');
      closeNav('right');
    break;
    case 'LBTN':
      console.log('LBTN');
      openNav('left');
    break;
    case 'RBTN':
      console.log('RBTN');
      openNav('right');
    break;
  }
}


function App() {
  return (
    <div className="App">
      <div id="l-Sidenav" className="l-sidenav">
        <div onClick={() => handleClick('LNAV-CLOSE')}>
          <b>x</b>
        </div>
      </div>
      <div id="r-Sidenav" className="r-sidenav">
        <div onClick={() => handleClick('RNAV-CLOSE')}>
          <b>x</b>
        </div>
      </div>
      <div id="sidenav-screen" className="sidenav-screen" onClick={() => handleClick('NAV-SCREEN')}></div>
      <header className="App-header">
        <h1>{homeTitle}</h1>
      </header>
      <div className="App-container">
        <aside className="Left-aside">
          <div className="Nav-spacer"></div>
          <div className="Nav-button" onClick={() => handleClick('LBTN')}>
            <h1>{rightArrow}</h1>
          </div>
        </aside>
        <main className="App-main">
        </main>
        <aside className="Right-aside">
          <div className="Nav-spacer"></div>
          <div className="Nav-button" onClick={() => handleClick('RBTN')}>
            <h1>{leftArrow}</h1>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
