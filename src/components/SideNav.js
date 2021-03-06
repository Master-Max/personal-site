import React from 'react';
import { A } from "hookrouter";
// import routes from "./router";

function closeNav(pos) {
  switch (pos){
    case 'left':
      document.getElementById("l-Sidenav").style.width = "0";
      document.getElementById("sidenav-screen").style.display = "none";
    break;
    case 'right':
      document.getElementById("r-Sidenav").style.width = "0";
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

function SideNav(props) {
  return (
    <div id={props.id} className={'sidenav ' + props.className}>
      <ul className='sidenav-items'>
        <div className='sidenav-links'>
          <A href="/" onClick={() => closeNav()}><li className={props.homeClass}>HOME</li></A>
          <A href="/about" onClick={() => closeNav()}><li className={props.aboutClass}>ABOUT</li></A>
          <A href="/resume" onClick={() => closeNav()}><li className={props.resumeClass} >HIRE_ME!</li></A>
          <A href="/projects" onClick={() => closeNav()}><li className={props.projectsClass}>PROJECTS</li></A>
          <A href="/blogs" onClick={() => closeNav()}><li className={props.blogsClass}>BLOG</li></A>
        </div>
        <div className='sidenav-close' onClick={() => closeNav()}>
          <li><span>{props.pos === "left" ? <b>{'<'}</b> : <b>{'>'}</b>}</span></li>
        </div>
      </ul>
    </div>
  );
}

export default SideNav;

// <span onClick={() => closeNav(props.pos)}><b>X</b></span><br />

// <li><A href="/" onClick={() => closeNav()}>HOME</A></li>
// <li><A href="/about" onClick={() => closeNav()}>ABOUT</A></li>
// <li><A href="/resume" onClick={() => closeNav()}>HIRE_ME!</A></li>
// <li><A href="/projects" onClick={() => closeNav()}>PROJECTS</A></li>
// <li><A href="/blogs" onClick={() => closeNav()}>BLOG</A></li>
