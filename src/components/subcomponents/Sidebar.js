import React from 'react';

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
      console.log('ERR: openNav() in Sidebar.js')
    break;
  }
}

function Sidebar(props){
  return (
    <aside className={props.className}>
      <div className="Nav-spacer"></div>
      <div className="Nav-button" onClick={() => openNav(props.pos)}>
        <h1>{props.buttonIcon}</h1>
      </div>
      <div className="Nav-bot-spacer"></div>
    </aside>
  )
}

export default Sidebar;


// function Sidebar(props){
//   return (
//     <aside className={props.className}>
//       <div className="Nav-spacer"></div>
//       <div className="Nav-button" onClick={props.handleClick}>
//         <h1>{props.buttonIcon}</h1>
//       </div>
//     </aside>
//   )
// }
