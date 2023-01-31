import * as React from "react";
import Cta from "./cta";
import logo from "../../images/club.png";


type props = {
  data:any;
 };

const Header = (props:any) => {
  console.log(props)
    React.useEffect(()=>{
      document.body.setAttribute("id","body");
    })
  const linkDoms = props._site.c_headerlinks.map((link:any) => (
      <a className="navbar-item" href={link.link} >
        <span>{link.label}</span>
      </a>
  ));
// console.log(linkDoms,"linkdoms")

  const toggle=()=>{
    (document.getElementById("body") as HTMLInputElement).classList.toggle('');
  };

  return (
    <>
    
      <div id="header" className="header-nav">
        
        <div className="headerLogo">
                  <a className="logo" href="/" style={{display:"grid",placeItems:"center"}}>
                    <div style={{margin:"19px 0px 19px 0px"}}>
                    <img src={props._site.c_footerLogo.url}/> 
                    </div>
                  </a>
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
