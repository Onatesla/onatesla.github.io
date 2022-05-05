import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Ham from './sidemenu';

const Header = styled.div`
background:#1d1d1d;
position:relative;
top:0px;
width:100%;;
box-shadow:4px 4px 18px rgba(27,27,27,.15);
z-index:2;
overflowX:hidden;
.nav
{height:88px;}
.nav-menu
{display:flex;
position:relative;
top:-50px;
left:-2%;
gap:4%;
margin-right:0;
width:600px;
overflow:hidden;}
.nav-item
{color:white;
font-family:poppins;
}
@media screen and (max-width:1380px){
  .nav-menu{display:none;}
  .nav{
    height:60px;
  }
  .logo{
    top:-8px;
  }
}
`;

const url = 'https://i.ibb.co/hcNcrQp/Senza-titolo-1.png';
function Navbar() {
  return (
    <Header>
      <section className="navbar">
        <div className="nav">
          <Link to="/"><img src={url} alt="Logo" className="logo" /></Link>
          <ul className="nav-menu">
            <li><Link to="/where" className="nav-item">Dove siamo?</Link></li>
            <li><Link to="/photogrid" className="nav-item">I nostri lavori</Link></li>
            <li><Link to="/social" className="nav-item">I nostri social</Link></li>
            <li><Link to="/businesscard" className="nav-item">Contattaci</Link></li>
            <li><Link to="/contact" className="nav-item">Preventivo</Link></li>
          </ul>
        </div>
        <Ham />
      </section>
    </Header>
  );
}

export default Navbar;
