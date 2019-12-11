import React from 'react';
import Sidebar from './subcomponents/Sidebar';

const headerTitle = '<codeby.me/>';

function HomePage(props) {
  return (
    <>
      <header className="App-header">
        <h1>{headerTitle}</h1>
      </header>
      <div className="App-container">
        <Sidebar
          className="Left-aside"
          pos="left"
          buttonIcon=">"
        />
        <main className="App-main">
          <div className="main-home">
            <h2>Welcome</h2>
            <h2>to codedby.me</h2>
            <h2>Max Petersen's</h2>
            <h2>personal site</h2>
          </div>
        </main>
        <Sidebar
          className="Right-aside"
          pos="right"
          buttonIcon="<"
        />
      </div>
    </>
  )
}

export default HomePage;


// <aside className="Left-aside">
//   <div className="Nav-spacer"></div>
//   <div className="Nav-button" onClick={props.handleClickLeft}>
//     <h1>{rightArrow}</h1>
//   </div>
// </aside>

// <aside className="Right-aside">
//   <div className="Nav-spacer"></div>
//   <div className="Nav-button" onClick={props.handleClickRight}>
//     <h1>{leftArrow}</h1>
//   </div>
// </aside>
