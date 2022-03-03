import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Ham from "./sidemenu";
const Header=styled.div `
background:#1d1d1d;
position:absolute;
top:0px;
width:100%;
box-shadow:4px 4px 18px rgba(27,27,27,.15);
z-index:2;
.nav
{height:88px;}
.nav-menu
{display:flex;
position:relative;
top:-50px;
left:40%;
gap:6%;}
.nav-item
{color:white;
font-family:poppins;
}
@media screen and (max-width:1380px){
  .nav-menu{display:none;}
}
`

const url = "https://upload.wikimedia.org/wikipedia/it/f/f3/Fastweb_company_logo-1-.png"
const Navbar = () => {
    return(
        <>
    <Header>
    <section className = "navbar">
    <div className = "nav">
         <Link to = "/"><img src = {url} alt = "Logo" className = "logo" /></Link>
         <ul className={`nav-menu`}>
      <li><Link to="/where" className="nav-item" >Dove siamo?</Link></li>
      <li><Link to="/photogrid" className="nav-item" >I nostri lavori</Link></li>
      <li><Link to="/me" className="nav-item" >Chi sono?</Link></li>
      <li><Link to="/businesscard" className="nav-item" >Contattaci</Link></li>
      <li><Link to="/contact" className="nav-item" >Preventivo</Link></li>
    </ul>
    </div>
    <Ham/>
    </section>
    </Header>
    </>
    )
}

export default Navbar;