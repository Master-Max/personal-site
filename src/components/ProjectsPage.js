import React from 'react';
import Sidebar from './subcomponents/Sidebar'
import SideNav from './SideNav';
import ProjectCard from './subcomponents/ProjectCard'
// import './css/Projects.css';
// import './css/Projects.scss';

const headerTitle = '<PROJECTS/>';

const c1 = <ProjectCard name='C1' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
const c2 = <ProjectCard name='C2' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
const c3 = <ProjectCard name='C3' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
const c4 = <ProjectCard name='C4' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
const c5 = <ProjectCard name='C5' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
const c6 = <ProjectCard name='C6' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>

const allProjects = [c1,c2,c3,c4,c5,c6];

function closeNavScreen() {
  document.getElementById("r-Sidenav").style.width = "0";
  document.getElementById("sidenav-screen").style.display = "none";
  document.getElementById("l-Sidenav").style.width = "0";
  document.getElementById("sidenav-screen").style.display = "none";
}

// renderProjects = (array) => {
//   const projects = []
//   array.forEach(c) => {
//     projects.push()
//   }
// }

function ProjectsPage(props) {
  return (
    <>
      <SideNav id='l-Sidenav' className='l-sidenav' pos='left' projectsClass='active'/>
      <SideNav id='r-Sidenav' className='r-sidenav' pos='right' projectsClass='active'/>
      <div id="sidenav-screen" className="sidenav-screen" onClick={() => closeNavScreen()}></div>
      <header className="App-header orange-c">
        <h1>{headerTitle}</h1>
      </header>
      <div className="App-container">
        <Sidebar
          className="Left-aside"
          pos="left"
          buttonIcon=">"
        />
        <main className="App-main">
          <div className="projects-body scroll">
            {allProjects}
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

export default ProjectsPage;

// <section class="cards">
//   {c1}{c2}{c3}{c4}
// </section>
