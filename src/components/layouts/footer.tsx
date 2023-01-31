import * as React from "react";

const Footer = (props:any) => {
   console.log(props.links)
     React.useEffect(()=>{
       document.body.setAttribute("id","body");
     })
const toggle=()=>{
      (document.getElementById("body") as HTMLInputElement).classList.toggle('');
    };

const About=props.links?.c_footerLinks?.about?.map((link:any) => (
   <a className="navbar-item" href={link.link} > 
     <span>{link.label}</span><br /></a>
  
));
const contactUs=props.links?.c_footerLinks?.contactUs?.map((link:any) => (
   <a className="navbar-item" href={link.link} >
     <span>{link.label}</span><br />
   </a>
));
const menus=props.links?.c_footerLinks?.menus?.map((link:any) => (
   <a className="navbar-item" href={link.link} >
     <span>{link.label}</span><br />
   </a>
));
   return (
      <>
         <footer className="footer">
            <div className="container" style={{display:"flex"}}>
                  <a className="logo" href="/">
                    <img src={props.links.c_footerLogo.url}/> 
                  </a>
            
               <div className="footer_links">
                  <div className="column">
                  <h2 style={{fontSize:"50px"}}>About</h2>
                  <ul>
                     <li style={{display:"block",textDecoration:"none"}}>{About} </li>  </ul>
                  </div>
                  <div className="column">
                  <h2 style={{fontSize:"50px"}}>Contact Us</h2>
                    <li style={{display:"block",textDecoration:"none"}}> <a>{contactUs}</a></li>
                  </div>
                  <div className="column">
                     <h2 style={{fontSize:"50px"}}>Menu</h2>
                     <li style={{display:"block",textDecoration:"none"}}><a>{menus}</a></li>
                  </div>
                  </div>
               </div>
         </footer>
      </>
   );
};

export default Footer;
