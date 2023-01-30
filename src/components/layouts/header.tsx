import * as React from "react";
import Cta from "./cta";
import logo from "../../images/club.png";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label:"Restaurant",
    url:"/"
  },
  {
    label:"Menu",
    url:"/"
  },
  {
    label:"Booking",
    url:"/"
  }
];

const Header = () => {
  const linkDoms = links.map((link) => (
      <a className="navbar-item" href={link.url} >
        <span>{link.label}</span>
      </a>
  ));

  return (
    <>
      <div id="header" className="header-nav">
        <div className="container header-content">
          <div className="header-content-left">
            
              
            <a className="button" href="#" title="Book now">Book Your table</a>
          </div>
          <div className="header-content-middle">
            <a className="logo" href="/">
              <img className="" src={logo} alt="Prezzo"/>
            </a>
          </div>
          <div className="header-content-right lg:hidden">
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div className="container">
          <nav className="navbar" style={{color:"#F9DDDD"}}>
            {linkDoms}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
