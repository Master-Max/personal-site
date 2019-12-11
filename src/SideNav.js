import React from 'react';
import { useRoutes, A } from "hookrouter";
import routes from "./router";


function SideNav(props) {
  const routeResult = useRoutes(routes);
  return (
    <div id={props.id} className={props.className}>
      <div>
        <span onClick={props.handleClick}><b>X</b></span><br />
        <A href="/">HOME</A><br />
        <A href="/about">ABOUT</A><br />
      </div>
    </div>
  );
}

export default SideNav;
