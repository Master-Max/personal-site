import React from 'react';
import Sidebar from './subcomponents/Sidebar'
import SideNav from './SideNav';

const headerTitle = '<blogs/>';

function closeNavScreen() {
  document.getElementById("r-Sidenav").style.width = "0";
  document.getElementById("sidenav-screen").style.display = "none";
  document.getElementById("l-Sidenav").style.width = "0";
  document.getElementById("sidenav-screen").style.display = "none";
}

function BlogsPage(props){
  return (
    <>
      <SideNav id='l-Sidenav' className='l-sidenav' pos='left' blogsClass='active'/>
      <SideNav id='r-Sidenav' className='r-sidenav' pos='right' blogsClass='active'/>
      <div id="sidenav-screen" className="sidenav-screen" onClick={() => closeNavScreen()}></div>
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

export default BlogsPage;
