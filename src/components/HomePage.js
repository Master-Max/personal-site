import React from 'react';

const homeTitle = '<codeby.me/>';
const rightArrow = '>';
const leftArrow = '<';

function HomePage(props) {
  return (
    <>
      <header className="App-header">
        <h1>{homeTitle}</h1>
      </header>
      <div className="App-container">
        <aside className="Left-aside">
          <div className="Nav-spacer"></div>
          <div className="Nav-button" onClick={props.handleClickLeft}>
            <h1>{rightArrow}</h1>
          </div>
        </aside>
        <main className="App-main">
        </main>
        <aside className="Right-aside">
          <div className="Nav-spacer"></div>
          <div className="Nav-button" onClick={props.handleClickRight}>
            <h1>{leftArrow}</h1>
          </div>
        </aside>
      </div>
    </>
  )
}

export default HomePage;
