import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header=styled.div `
background:#1d1d1d;
position:absolute;
top:0;
width:100%;
box-shadow:4px 4px 18px rgba(27,27,27,.25);
z-index:2;
#menu__toggle {
    opacity: 0;
    
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
    background-color:#1d1d1d;
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
    background-color:#1d1d1d;
    
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
    background-color:#1d1d1d;
    
  }
  #menu__toggle:checked ~ .menu__box {
    left: 80% !important;
  }
  .menu__btn {
    position: fixed;
    top: 40px;
    left: 96%;
    width: 46px;
    height: 46px;
    cursor: pointer;
    border:none;
    z-index: 1;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    border:solid 0.01em;
    height: 4px;
    background-color: white;
    transition-duration: .25s;
    
  }
  .menu__btn > span::before {
    content: '';
    
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: 100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: rgba(246, 246, 246, .94);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    font-family:"space grotesk";
    font-size: 32px;
    transition-duration: .25s;
  }
  .menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: "space Grotesk"
    
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
  }
  .menu__item:hover {
    background-color: #1d1d1d;
    color:#f6f6f6;
  }
  @media screen and (max-width:440px) {
    width:104%;
    .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    left:0px;
    width: 100%;
    border:solid 0.01em;
    height: 4px;
    background-color: white;
    transition-duration: .25s;
    
  }
  .menu__btn {
    position: fixed;
    top: 40px;
    left:20px;
    margin-left:72%;
    width: 46px;
    height: 46px;
    cursor: pointer;
    border:none;
    z-index: 1;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: 100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: rgba(246, 246, 246, .94);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    font-family:"space grotesk";
    font-size: 32px;
    transition-duration: .25s;
  }
  #menu__toggle:checked ~ .menu__box {
    left: 100px !important;
  }
  }
  @media screen and (max-width:840px) and  (min-width:440px) {
    width:104%;
    .menu__box{
      left:120%;
      
    }
    #menu__toggle:checked ~ .menu__box {
      left: 66% !important;
    
    }
    .menu__btn {
      position: fixed;
      top: 40px;
      left:20px;
      margin-left:80%;
      width: 46px;
      height: 46px;
      cursor: pointer;
      border:none;
      z-index: 1;
    }
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
    </div>
    <div className="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul className="menu__box">
      <li><Link to="/where" className="menu__item" >Dove siamo?</Link></li>
      <li><Link to="/photogrid" className="menu__item" >I nostri lavori</Link></li>
      <li><Link to="/me" className="menu__item" >Chi sono?</Link></li>
      <li><Link to="/businesscard" className="menu__item" >Contattaci</Link></li>
      <li><Link to="/social" className="menu__item" >Social</Link></li>
    </ul>
  </div>
    </section>
    </Header>
    </>
    )
}

export default Navbar;