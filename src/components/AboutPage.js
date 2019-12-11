import React from 'react';
import Sidebar from './subcomponents/Sidebar';

const headerTitle = '<about/>';

function AboutPage(props){
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
        <main className="App-main"></main>
        <Sidebar
          className="Right-aside"
          pos="right"
          buttonIcon="<"
        />
      </div>
    </>
  )
}

export default AboutPage;
